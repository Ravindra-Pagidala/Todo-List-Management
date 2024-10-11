# Build stage - Maven dependency caching
FROM maven:3-eclipse-temurin-21 AS build

# Set the working directory
WORKDIR /app

# First, copy the POM file and download dependencies. This step will be cached if the POM hasn't changed.
COPY pom.xml ./
RUN mvn dependency:go-offline -B

# Now copy the rest of the source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage - Running the Spring Boot jar
FROM eclipse-temurin:21-alpine

# Set the working directory
WORKDIR /app

# Copy only the built jar file from the previous stage
COPY --from=build /app/target/restful-web-services-0.0.1-SNAPSHOT.jar app.jar

# Expose the port
EXPOSE 8080

# Entry point to run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
