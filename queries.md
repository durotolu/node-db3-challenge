# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName
FROM [Products] as p
LEFT JOIN [Categories] as c
ON p.productid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.OrderID, s.ShipperName
FROM [Orders] as o
LEFT JOIN [Shippers] as s
ON o.ShipperId = s.ShipperId
WHERE o.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, o.Quantity
FROM [OrderDetails] as o
LEFT JOIN [Products] as p
ON o.ProductID = p.ProductID
WHERE o.OrderID = '10251'
ORDER BY p.ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.OrderID, c.CustomerName, e.LastName
FROM [Orders] AS o
JOIN [Customers] AS c
ON o.CustomerID = c.CustomerID
JOIN [Employees] AS e
ON o.EmployeeID = e.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT c.CategoryName, COUNT(c.Description) AS [COUNT]
FROM [Categories] AS c
JOIN [Products] AS p
ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT o.OrderID, SUM(o.Quantity) AS ItemCount
FROM [OrderDetails] AS o
JOIN [Products] AS p
ON o.ProductID = p.ProductID
GROUP BY o.OrderID