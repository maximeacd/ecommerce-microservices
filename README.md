# 🛒 Ecommerce Microservices

Demo project showcasing a **Java + Spring Boot microservices architecture** with asynchronous communication (Kafka), polyglot persistence (PostgreSQL + MongoDB), and CI/CD (GitHub Actions + DockerHub).

---

## 🚀 Architecture

### Services:
- **catalog-service** → Product CRUD (PostgreSQL)  
- **user-service** → User management + JWT Authentication (MongoDB)  
- **order-service** → Order management + Kafka events  
- **api-gateway** → API Gateway entry point (Spring Cloud Gateway)  
- **discovery-service** → Service discovery (Eureka)  

---

## 🛠️ Tech Stack

- **Backend**: Java 17, Spring Boot 3  
- **Messaging**: Apache Kafka  
- **Databases**: PostgreSQL + MongoDB  
- **Infrastructure**: Docker, Docker Compose 
- **Testing**: JUnit5, Testcontainers  
- **CI/CD**: GitHub Actions + DockerHub  

---

## 📦 Run the Project

### 1. Clone the repo

```bash
git clone https://github.com/maximeacd/ecommerce-microservices.git
cd ecommerce-microservices
```

### 2. Build Docker images

```bash
docker-compose build
```

### 3. Start all services

```bash
docker-compose up
```

---

## 🌍 Main Endpoints

- Eureka Dashboard : http://localhost:8761
- API Gateway : http://localhost:8081

Service	(URL via Gateway)
- User Service:	http://localhost:8081/users/...
- Catalog Service:	http://localhost:8081/catalog/...
- Order Service:	http://localhost:8081/orders/...

---

## Tests

Unit & integration tests with JUnit5 + Testcontainers:

```bash
mvn verify
```

- PostgreSQL (catalog)
- MongoDB (users)
- Kafka (order events)

---

## 🔄 CI/CD

GitHub Actions:
- Build
- Run tests
- Build Docker images
- Push to DockerHub

Required GitHub Secrets:
- DOCKERHUB_USERNAME → your DockerHub username
- DOCKERHUB_TOKEN → DockerHub access token

---

## 📸 Screenshots

Eureka Dashboard (upcoming)

---

## 👤 Author

- Project by Maxime [maximeacd]
- 📧 Email: maxime.accad@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/maximeaccad/
