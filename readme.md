# Recipe sharing api


---
## Service list
### Public Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/register|POST|Create new user|-|-| -| {firstName: "string", lastName: "string", username:"string", password: "string", confirmPassword:"string"}|{message:"SUCCESS"}
/api/login|POST|Login|-|-|-|{username:"string", password:"string"}|{result:{id: int,accessToken:"string" }}|


##### test register
```
curl -X POST \
-H 'Content-Type:application/json' \
-d '{"firstName": "foo","lastName": "bar","username": "bash", "password": "123456","confirmPassword": "123456" }' \
http://localhost:3033/api/register

```
##### test login
```
curl -X POST \
-H 'Content-Type:application/json' \
-d '{"username": "bash", "password": "123456"}' \
http://localhost:3033/api/login
```
---

### Authhenticate User Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/auth/me|GET|get user|Bearer Token|-|-|-|-| 
/api/auth/user|PATCH|edit user profile|Bearer Token (user)| -| -|{}|{}|
/api/auth/user/follower| GET|get all follower from this user|Bearer Token|-|-|-|
/api/auth/user/following|GET|get list of user this user follow| Bearer Token|-|-|-|
/api/auth/user/follow|PATCH|follow user| Bearer Token| -|-|{id:int}|{}|
/api/auth/user/follow|DELETE|unfollow user| Bearer Token| -|-|{id:int}|{}|

### test token
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTE1NTIxOTcsImV4cCI6MTc1MjE1Njk5N30.z7RpyrVacHlxeWPArxM6C1uVicJ_L89wkUnvkpDv-ck
```

#### test getMe
```
curl -H "Authorization: Bearer <token>" http://localhost:3033/api/auth/me
```
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTE1NTIxOTcsImV4cCI6MTc1MjE1Njk5N30.z7RpyrVacHlxeWPArxM6C1uVicJ_L89wkUnvkpDv-ck" http://localhost:3033/api/auth/me
```
#### test edit user
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"username":"test"}' \
http://localhost:3033/api/auth/user
```
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTE1NTIxOTcsImV4cCI6MTc1MjE1Njk5N30.z7RpyrVacHlxeWPArxM6C1uVicJ_L89wkUnvkpDv-ck' \
-d '{"username":"test"}' \
http://localhost:3033/api/auth/user
```
#### test get follower
```
curl -H "Authorization: Bearer <token>" http://localhost:3033/api/auth/user/follower
```
#### test get following
```
curl -H "Authorization: Bearer <token>" http://localhost:3033/api/auth/user/following
```
#### test follow
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/user/follow
```
#### test unfollow
```
curl -X DELETE \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/user/follow
```

---
### Authhenticate Admin Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/auth/admin/register|POST|register admin| Bearer Token (super only)|-|-|{firstName: "string", lastName: "string", username:"string", password: "string", confirmPassword:"string"}|{message:"CREATED"}
/api/auth/admin/role/:id|PATCH|edit user role|Bearer Token (super only)|id|-|{role:"enum"}|{message:"success"}
/api/auth/admin/delete/user/:id|DELETE|delete user|Bearer Token(super only)|id|-|-|{message:"DELETED"}
/api/auth/admin/ban/:id|PATCH|ban/unban user|Bearer Token (super only)|id|-|{userStatus: "enum"}|{message:"BANNED"}|
/api/auth/admin/add/ingredient|POST|add new ingredient| Bearer Token (admin, super)|-|-|{name:"string", image:"string?", protein:float, cabohydrate:float, fat:float}|{message:"CREATED"}|
/api/auth/admin/edit/ingredient/:id|PATCH|edit ingredient| Bearer Token (admin, super)|id|-|{name:"string", image:"string", protein:float, cabohydrate:float, fat:float}|{message:"EDITED"}|
/api/auth/admin/delete/ingredient/:id|DELETE|delete ingredient| Bearer Token (admin, super)|id|-|{name:"string", image:"string", protein:float, cabohydrate:float, fat:float}|{message:"DELETED"}|
/api/auth/admin/add/equipment|POST|add new equipment| Bearer Token (admin, super)|-|-|{name:"string", image: "string"}|{message:"CREATED"}
/api/auth/admin/edit/equipment|PATCH|edit equipment| Bearer Token (admin, super)|-|-|{name:"string", image: "string"}|{message:"EDITED"}
/api/auth/admin/delete/equipment/:id|DELETE|delete equipment| Bearer Token (admin, super)|-|-|{name:"string", image: "string"}|{message:"DELETED"}



#### test register admin
```
curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"firstName": "admin","lastName": "admin","username": "admin", "password": "123456","confirmPassword": "123456" }' \
http://localhost:3033/api/auth/admin/register
```
#### test edit user role
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/role/1
```
#### test delete user
```
curl -X DELETE \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/delete/user/1
```
#### test ban/unban user
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/ban/1
```
#### test add new ingredient
```
curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/add/ingredient
```
#### test edit ingredient
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/edit/ingredient/1
```
#### test delete ingredient
```
curl -X DELETE 
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/delete/ingredient/1
```
#### test add new equipment
```
curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/add/equipment
```
#### test edit ingredient
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/edit/equipment/1
```
#### test delete ingredient
```
curl -X DELETE \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/admin/delete/equipment/1
```

---

### Recipe Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/recipies|GET| view all recipe|-|-|-|-|{result:[recipe:"string"]}
/api/recipe/:id|GET|get recipe by id| -|recipe id|-|-|{result:{recipe:"string"}}
/api/recipe/search?|GET|search recipe|-|-|caterory, search|-|{result:{recipe:"string"}}
/api/auth/recipe|POST|create new recipe|Bearer Token|-|-|{}|{}|
/api/auth/recipe/:id|DELETE|delete recipe|Bearer Token (user, admin)|id|-|-|{message:"DELETED"}
/api/auth/recipe/:id|PATCH|edit recipe|Bearer Token|id|-|{name:"string", category:"enum", ingredient:int(id), equipment:int(id), instruction: "string", serving: int, image:"string"}|{message:"EDITED"}
/api/reviews/recipe|GET|get all review of this recipe|-|-|-|-|{result:{review:{}}}


#### test get all recipe
```
curl http://localhost:3033/api/recipies
```
#### test get recipe by id
```
curl http://localhost:3033/api/recipe/1
```
#### test search recipe
```
curl http://localhost:3033/api/search/recipe\?name=potato\&category=main
```

#### test create recipe
```
curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/recipe/
```

#### test delete recipe
```
curl -X DELETE \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/recipe/1
```
#### test edit recipe
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/recipe/1
```
#### test get review of this recipe
```
curl http://localhost:3033/api/reviews/recipe/1
```

---
### Review Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/review/:id|GET|get review by id|-|id|-|-|{result:{review:"string"}}
/api/auth/review|POST|create new review|Bearer Token (user, admin)|-|-|{title:"string", body:"string", image:"string"}|{message:"CREATED"}|
/api/auth/review|PATCH|edit review| Bearer Token (user, admin)|-|-|{title:"string", body:"string", image:"string"}|{message:"EDITED"}|
/api/auth/review/:id|DELETE|delete review|Bearer Token (user, admin)|id|-|-|{message:"DELETED"}

#### test get review by id
```
curl http://localhost:3033/api/review/1
```

#### test create review
```
curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/review/
```

#### test edit review
```
curl -X PATCH \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/review/
```

#### test delete review
```
curl -X DELETE \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer <token>' \
-d '{"id": 1}' \
http://localhost:3033/api/auth/review/1
```

---
### Ingredient Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/ingredients|GET|get all ingredient|-|-|-|-|{result:{ingridient:"string"}}|
/api/ingredient/:id|GET|get ingredient by id|-|id|-|-|{}|
/api/ingredient/?|GET|search ingredient|-|-|search|-|{}|

#### test get all ingredient
```
curl http://localhost:3033/api/ingredients
```
#### test get ingredient by id
```
curl http://localhost:3033/api/ingredient/1
```
#### test search ingredient
```
curl http://localhost:3033/api/ingredient/\?name=potato
```
---

### Equipment Routes
|Path |Method|Description |Authentication |Params |Query |Body | Response
|:-- |:-- |:-- |:-- |:-- |:-- |:--|:--|
/api/equipments|GET|get all equipments|-|-|-|-|{result:{ingridient:"string"}}|
/api/equipment/:id|GET|get equipment by id|-|id|-|-|{}|
/api/equipment/?|GET|search equipment|-|-|search|-|{}|

#### test get all equipments
```
curl http://localhost:3033/api/equipments
```
#### test get equipment by id
```
curl http://localhost:3033/api/equipment/1
```
#### test search equipment
```
curl http://localhost:3033/api/equipment/\?name=pan
```

---
