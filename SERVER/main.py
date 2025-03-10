from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables

print("DATABASE_URL:", os.getenv("postgresql://db_owner:npg_OaNd3pkehs0l@ep-lucky-waterfall-a81kw2u8-pooler.eastus2.azure.neon.tech/db?sslmode=require"))  # Debugging: Check if it loads
