# Tools
- [Faker](https://github.com/marak/Faker.js/) (*optional*)
- [Sequelize](http://sequelize.readthedocs.org/en/latest/)
- [Express](http://www.expressjs.com/)


# Goal
Build an Inventory Database

## Products
- id SERIAL
- Name TEXT
- Description TEXT
- Price DECIMAL(2)
- createdAt DATETIME
- upDatedAt DATETIME
- 
# After creating REST server
Create one more table

## Inventory
- id
- quantity Integer
- product_id FK
- 
## Orders
- id
- name TEXT
- product_id FK
- quantity Integer
