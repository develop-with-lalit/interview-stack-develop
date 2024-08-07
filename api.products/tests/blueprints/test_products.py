from pytest import fixture
from app import PRODUCTS_URL
from api.blueprints.products import products_blueprint
from api.models import Customer, Product, Orders
import json

@fixture()
def test_client(test_app):
    test_app.register_blueprint(products_blueprint, url_prefix=PRODUCTS_URL)
    return test_app.test_client()

@fixture()
def init_db():
    customer = Customer(CustomerFirstName="Test1", CustomerLastName="McTest1")
    customer.save()

    active_product = Product(
        ProductName="Test1",
        ProductPhotoURL="/test1",
        ProductStatus="Active"
    )
    active_product.save()
    in_active_product = Product(
        ProductName="Test2",
        ProductPhotoURL="/test2",
        ProductStatus="InActive"
    )
    in_active_product.save()

    orders = [
        Orders(**{
            "OrderStatus": "Queued",
            "ProductID": active_product.ProductID,
            "CustomerID": customer.CustomerID,
        }),
        Orders(**{
            "OrderStatus": "Complete",
            "ProductID": active_product.ProductID,
            "CustomerID": customer.CustomerID,
        }),
        Orders(**{
            "OrderStatus": "Cancelled",
            "ProductID": active_product.ProductID,
            "CustomerID": customer.CustomerID,
        }),
        Orders(**{
            "OrderStatus": "Cancelled",
            "ProductID": in_active_product.ProductID,
            "CustomerID": customer.CustomerID,
        }),
    ]
    for order in orders: order.save()
    return orders, [active_product, in_active_product], [customer]

def test_get_all_products(test_client, init_db):
    response = test_client.get(f"{PRODUCTS_URL}/all")
    assert response.status_code == 200
    deserialized_response = json.loads(response.data)
    data = deserialized_response.get('data')
    assert data is not None
    assert len(data) == 2
    product_statuses = {}
    for product in data:
        status = product.get("ProductStatus")
        if status in product_statuses.keys():
            product_statuses[status] += 1
        else: product_statuses[status] = 1
    assert len(product_statuses.keys()) == 2
    assert product_statuses.get("Active") == 1
    assert product_statuses.get("InActive") == 1

def test_get_active_products(test_client, init_db):
    response = test_client.get(f"{PRODUCTS_URL}/active")
    assert response.status_code == 200
    deserialized_response = json.loads(response.data)
    data = deserialized_response.get('data')
    assert data is not None
    assert len(data) == 1
    product_statuses = {}
    for product in data:
        status = product.get("ProductStatus")
        if status in product_statuses.keys():
            product_statuses[status] += 1
        else: product_statuses[status] = 1
    assert len(product_statuses.keys()) == 1
    assert product_statuses.get("Active") == 1