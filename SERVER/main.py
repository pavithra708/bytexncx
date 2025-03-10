from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables

print("DATABASE_URL:", os.getenv("DATABASE_URL"))
  # Debugging: Check if it loads
