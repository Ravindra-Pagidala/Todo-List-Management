FROM maven:3-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-alpine

COPY target/restful-web-services-0.0.1-SNAPSHOT.jar app.jar


ENTRYPOINT ["java", "-jar", "app.jar"]


EXPOSE 8080
