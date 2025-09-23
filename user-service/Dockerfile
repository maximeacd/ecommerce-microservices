# Builder
FROM maven:3.9.3-eclipse-temurin-17 AS builder
WORKDIR /app

COPY . .

RUN mvn -pl user-service -am package -DskipTests

# Runtime
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/user-service/target/user-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8082
CMD ["java", "-jar", "app.jar"]
