# Étape 1 : Builder Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copier le parent POM et tous les modules
COPY pom.xml .
COPY discovery-service/pom.xml discovery-service/pom.xml
COPY catalog-service/pom.xml catalog-service/pom.xml
COPY order-service/pom.xml order-service/pom.xml
COPY user-service/pom.xml user-service/pom.xml
COPY api-gateway/pom.xml api-gateway/pom.xml

# Copier les sources de tous les modules
COPY discovery-service/src discovery-service/src
COPY catalog-service/src catalog-service/src
COPY order-service/src order-service/src
COPY user-service/src user-service/src
COPY api-gateway/src api-gateway/src

# Builder tout le projet multi-module
RUN mvn clean package -DskipTests

# Étape 2 : Image runtime pour discovery-service
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copier le JAR buildé du discovery-service
COPY --from=builder /app/discovery-service/target/discovery-service-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port Eureka Server
EXPOSE 8761

# Commande au lancement
ENTRYPOINT ["java","-jar","app.jar"]
