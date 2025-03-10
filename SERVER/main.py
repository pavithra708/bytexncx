from dotenv import load_dotenv
import os

# Load .env file explicitly from SERVER directory
dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path=dotenv_path)

print("DATABASE_URL:", os.getenv("DATABASE_URL"))  # Debug
