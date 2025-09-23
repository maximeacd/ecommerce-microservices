# Builder
FROM maven:3.9.3-eclipse-temurin-17 AS builder
WORKDIR /app

COPY . .

RUN mvn -pl api-gateway -am package -DskipTests

# Runtime
FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=builder /app/api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
