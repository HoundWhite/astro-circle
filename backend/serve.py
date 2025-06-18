import os
import sys
from waitress import serve
from django.core.wsgi import get_wsgi_application

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    serve(application, host='0.0.0.0', port=port) 