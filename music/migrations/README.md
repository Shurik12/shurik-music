# Make migrations for db
### Process
1. Create new emty migration
```bash
python manage.py makemigrations blog --empty
```
2. Create function for populating db and run it:
```pyhton
operations = [
		migrations.RunPython(fill_data_to_db),
	]
```