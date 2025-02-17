const projectData = [
    {
      title: "Uncovering Stack Exchange Data through data Mining",
      description: [
        "Developed a machine learning pipeline leveraging BERT and RoBERTa models to identify and flag technical terms in Stack Exchange posts.",
        "Implemented NLP technConducted a comparative analysis between BERT and RoBERTa, evaluating their effectiveness in detecting domain-specific terminology with contextual accuracy.",
        "Constructed a technical term vector by extracting flagged terms and used it as a feature input for a predictive model to estimate upvote scores, identifying high-value posts.",
        "Integrated NLP techniques and transformer-based embeddings to enhance term relevance detection and improve post ranking predictions.",
        "Did a comparative study of different ML models to predict upvote scores on a post based on the technical term vectors(TF-IDF)"
      ],
      github: "https://github.com/ArleneDcosta/StackExchangePatternandPrediction",
    },
    {
      title: "Alzheimer Image Detection and Prediction using OASIS Dataset",
      description: [
        "Conducted a comparative study between ResNet and DenseNet-201 to evaluate their performance in Alzheimer’s image classification using the OASIS database",
        "Implemented DenseNet-201 for categorizing MRI images into Alzheimer’s and Non-Alzheimer’s classes, achieving high accuracy through fine-tuning and transfer learning.",
        "Developed a full-stack application with Flask as the server-side routing service, handling model inference and API requests.",
        "Designed an intuitive frontend using HTML/CSS, ensuring a seamless user experience for uploading MRI images and viewing predictions.",
        "Utilized SQLite as the database for storing image metadata and prediction results, ensuring efficient data management."
      ],
      github: "https://github.com/ArleneDcosta/Alzheimerimagesdetection",
    },
    {
      title: "Portfolio Website",
      description: [
        "Developed a responsive portfolio website using React.js, showcasing projects, skills, and achievements with an interactive UI.",
        "Implemented GitHub Pages (github.io) for continuous development and deployment, leveraging npm build and deploy for automated updates.",
        "Designed a modern and user-friendly interface with reusable React components, ensuring scalability and maintainability.",
        "Optimized performance through efficient state management, and responsive design techniques for better user experience.",
        "Integrated contact forms, project showcases, and social media links to enhance engagement and accessibility."
      ],
      github: "https://github.com/ArleneDcosta/portfolio",
    },
    {
      title: "Automating ec2 instance creation using Terraform",
      description: [
        "Provisioned an Amazon EC2 instance using Terraform, configuring security groups, key pairs, and IAM roles for secure access and resource management",
        "Automated instance creation with user data scripts to initialize services, install dependencies, and configure the application environment upon launch",
        "Implemented a security-first approach by restricting inbound traffic with security groups and allowing only necessary ports (e.g., SSH and HTTP)"
      ],
      github: "https://github.com/ArleneDcosta/tf_ec2_deployment",
    }
  ];
  
  export default projectData;
  