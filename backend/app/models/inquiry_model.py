def inquiry_helper(inquiry) -> dict:
    return {
        "id": str(inquiry["_id"]),
        "customer_name": inquiry.get("customer_name", ""),
        "email": inquiry.get("email", ""),
        "machine_id": inquiry.get("machine_id", ""),
        "machine_name": inquiry.get("machine_name", ""),
        "message": inquiry.get("message", "")
    }