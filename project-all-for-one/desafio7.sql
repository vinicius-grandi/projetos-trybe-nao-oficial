SELECT p.id FROM products p 
WHERE id BETWEEN ((
  SELECT max(pmax.id) FROM products pmax
  ) - 4)
  AND (
  SELECT max(pmaxx.id) FROM products pmaxx
  )
  ORDER BY p.id DESC;
