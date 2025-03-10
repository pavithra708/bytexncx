from dotenv import load_dotenv
import os

# Get absolute path of the .env file
dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), ".env"))
print(f"Loading .env from: {dotenv_path}")  # Debugging: Check the path

# Load environment variables
load_dotenv(dotenv_path=dotenv_path)

# Debugging: Check if DATABASE_URL is loaded
database_url = os.getenv("DATABASE_URL")
if database_url:
    print("DATABASE_URL Loaded Successfully!")
else:
    print("DATABASE_URL Not Found! Check your .env file.")
