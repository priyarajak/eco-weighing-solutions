def inquiry_helper(inquiry) -> dict:
    return {
        "id": str(inquiry["_id"]),
        "customer_name": inquiry["customer_name"],
        "email": inquiry["email"],
        "machine_id": inquiry["machine_id"],
        "machine_name": inquiry["machine_name"],
        "message": inquiry.get("message")
    }