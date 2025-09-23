# Builder
FROM maven:3.9.3-eclipse-temurin-17 AS builder
WORKDIR /app

COPY . .

RUN mvn -pl discovery-service -am package -DskipTests

# Runtime
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/discovery-service/target/discovery-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8761
RUN apt-get update && apt-get install -y curl
CMD ["java", "-jar", "app.jar"]
