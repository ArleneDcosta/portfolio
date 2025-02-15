const experiences = [
    {
      jobTitle: "Software Developer",
      companyName: "Michigan Health Information Network Shared Services (MiHIN)",
      dates: "Aug 2024 - Present",
      description:[
      "Worked on SDOH application backend for validation of FHIR-based healthcare data within S3 using AWS Lambda and CI/CD pipeline automation with IAM, Bitbucket Pipeline, Serverless, Chalice, and AWS Step Functions, reducing deployment time by 40%",
      "Developed REST API endpoints using Jinja2 and Flask for data population on AWS Neptune using Gremlin via API Gateway with AWS Lambda as the listener, integrated with AWS Grafana, and validated using unittest and pytest",
      "Deployed AWS resources, DynamoDB tables using Terraform, reducing manual configuration errors by 25% and improving infrastructure consistency across environments",
      "Developed AWS Lambda functions to transition applications from AWS SQS to AWS Kinesis, enabling real-time data streaming event by implementing producers triggered by SFTP metadata uploads stored in S3 buckets",
      "Applied design patterns to create scalable and maintainable code and data structures decreasing technical debt by 35% and improving code reusability and actively participated in code reviews to ensure code quality, maintainability, and adherence to best practices",
      "Collaborated in an Agile environment with cross-functional teams to deliver high-quality end-to-end solutions in iterative sprints"
    ],
      image:  require("../assets/images/Mihin_logo.jpg")},
    {
      jobTitle: "Software Developer Intern",
      companyName: "Rebel",
      dates: "May 2024 - July 2024",
      description:[
        "Developed a single page application using ReactJs and Django Framework with GCP Pub Sub for unstructured data storage and PostGreSQL database for enhancing metadata and log storage in a fast-paced startup environment",
        "Designed data models, and developed serializers for REST APIs to ensure efficient data handling and communication",
        "Implemented caching mechanism using image blob storage within tokens to reduce cloud API calls, achieving a 20% decrease in cloud API usage costs"
      ],
      image: require("../assets/images/Rebel_logo.png")
    },
    {
      jobTitle: "Senior Data Engineer",
      companyName: "LTIMindtree",
      dates: "Aug 2021 - Aug 2022",
      description:[
        "Engineered an algorithm for parallel processing of terabytes of data through multithreading, improving data processing efficiency by 38% thus creating an in-house ETL Data Pipelining strategy",
        "Spearheaded automation of real-time data streaming from on-prem Kafka servers to Google Pub/Sub reducing latency",
        "Implemented hashing algorithm and bucketing/Sharding concepts for data validation of petabytes of data, reducing validation time from 40 minutes to 2 minutes, and worked on Data Mesh Prototype",
        "Spearheaded implementation of Docker containerization with Google Cloud Build and Google Cloud Run for 2+ applications, reducing deployment time by 40% and increasing deployment frequency from monthly to daily",
        "Led design and optimization of a robust Data Ingestion automation Python Framework, reducing data loading time of diverse data sources into target data warehouse (Google BigQuery) by 20% , thus boosting reliability with Pytest units",
        "Developed and tested a sophisticated xml parser for a Metadata Lineage tool with an inventory of 1,00,000 objects",
        "Implemented Slowly Changing Dimensions (SCD) on Google BigQuery, utilizing Oracle Server for efficient metadata management and storage"

      ],
      image: require("../assets/images/LTIMindtree_logo.jpg")
    },
    {
        jobTitle: "Data Engineer",
        companyName: "LTIMindtree",
        dates: "Aug 2020 - Aug 2021",
        description:[
        "Designed and implemented a Graph Sequencing Algorithm within the metadata lineage tool, strategically clustering over 10,000 objects for migration planning across complex business domains, reducing planning time by 40%",
        "Optimized data population to GraphDB(Orientdb) using PySpark, achieving a reduction in data loading time from 48 hours to 10 minutes, resulting in a substantial increase in overall system efficiency",
        "Engineered an automation engine that intelligently translates legacy on-prem Teradata SQL code to its Snowflake equivalent SQL code and reduces manual intervention providing 60% accuracy",
        "Tuned complex queries with strategies reducing the Snowflake job execution time from 2 hours to 20 minutes",
        "Implemented ETL processes using DBT (Data Build Tool) to transform, clean, and organize data, ensuring high data quality"
        
    ],
    image: require("../assets/images/LTIMindtree_logo.jpg")
  }
  ];
  
  export default experiences;
  