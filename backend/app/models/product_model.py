def product_helper(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "category": product["category"],
        "capacity": product["capacity"],
        "accuracy": product["accuracy"],
        "image_url": product.get("image_url"),
        "iso_compliant": product["iso_compliant"]
    }