export const PROFILE = {
  name: 'Tesfamichael Aboset',
  role: 'Senior DevOps Engineer',
  location: 'Addis Ababa, Ethiopia',
};

export const HERO_CONTENT = "Senior DevOps Engineer in Addis Ababa building reliable cloud platforms on Kubernetes, AWS and Azure, and shipping my own developer products: uSend, an email API for developers, and KCDK, one console for all your AWS infrastructure.";

export const ABOUT_TEXT = "DevOps Engineer with deep hands-on experience in Docker, Kubernetes, Docker Compose, Azure, GitLab, AKS and RKE2. I have a proven track record of improving cloud infrastructure automation and CI/CD pipelines, which has cut operational costs and raised system reliability. I enjoy cross-functional collaboration and keep pushing for continuous improvement in how teams ship.";

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), category: 'cloud', level: 90 },
  { name: 'Azure', icon: devicon('azure/azure-original.svg'), category: 'cloud', level: 80 },
  { name: 'Amazon SES', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), category: 'cloud', level: 85 },

  // Containers
  { name: 'Docker', icon: devicon('docker/docker-original.svg'), category: 'containers', level: 95 },
  { name: 'Docker Compose', icon: devicon('docker/docker-original.svg'), category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: devicon('kubernetes/kubernetes-plain.svg'), category: 'containers', level: 90 },
  { name: 'Rancher RKE2', icon: 'https://cdn.simpleicons.org/rancher', category: 'containers', level: 85 },
  { name: 'AKS', icon: devicon('azure/azure-original.svg'), category: 'containers', level: 80 },

  // Infrastructure
  { name: 'Terraform', icon: devicon('terraform/terraform-original.svg'), category: 'infrastructure', level: 85 },
  { name: 'AWS CDK', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), category: 'infrastructure', level: 85 },
  { name: 'AWS CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 85 },
  { name: 'Amazon VPC', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), category: 'infrastructure', level: 85 },

  // DevOps
  { name: 'GitLab CI', icon: devicon('gitlab/gitlab-original.svg'), category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: devicon('githubactions/githubactions-original.svg'), category: 'devops', level: 90 },
  { name: 'Jenkins', icon: devicon('jenkins/jenkins-plain.svg'), category: 'devops', level: 80 },
  { name: 'Azure DevOps', icon: devicon('azuredevops/azuredevops-original.svg'), category: 'devops', level: 85 },
  { name: 'Linux', icon: devicon('linux/linux-plain.svg'), category: 'devops', level: 90 },
  { name: 'Git', icon: devicon('git/git-original.svg'), category: 'devops', level: 90 },
  { name: 'Squid', icon: devicon('linux/linux-plain.svg'), category: 'devops', level: 75 },

  // Development
  { name: 'Go', icon: devicon('go/go-original-wordmark.svg'), category: 'development', level: 75 },
  { name: 'Bash', icon: devicon('bash/bash-original.svg'), category: 'development', level: 90 },
  { name: 'Node.js', icon: devicon('nodejs/nodejs-plain.svg'), category: 'development', level: 75 },
  { name: 'Python', icon: devicon('python/python-original.svg'), category: 'development', level: 70 },

  // Databases
  { name: 'Amazon RDS', icon: devicon('amazonwebservices/amazonwebservices-original-wordmark.svg'), category: 'database', level: 80 },
];

export const PROJECTS = [
  {
    title: 'uSend — Email API for Developers',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'An email API built for developers in Ethiopia and beyond. Send transactional mail and broadcasts over REST or SMTP, receive inbound mail with a single MX record, and get delivery, bounce and open events as signed webhooks. One-click DKIM, SPF and DMARC setup (with Cloudflare auto-configure), automatic bounce suppression, and local billing in ETB via Telebirr.',
    technologies: ['Amazon SES', 'REST API', 'SMTP', 'Webhooks', 'DNS / DKIM', 'Node SDK', 'Python SDK'],
    category: 'product',
    githubLink: '',
    websiteLink: 'https://usend.et',
  },
  {
    title: 'KCDK — The Control Plane for Your AWS',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Every stack. Every script. One console. KCDK deploys your CDK code with AWS\'s own CDK Toolkit Library, builds new infrastructure (VPC, load balancer, Fargate, databases) from a form, and attaches the stacks and bash-built ECS services you inherited, read-only. Shells, logs, backups and alarms sit next to the deploy button.',
    technologies: ['AWS CDK', 'CloudFormation', 'ECS / Fargate', 'IAM', 'GitHub / GitLab', 'RBAC + 2FA'],
    category: 'product',
    githubLink: '',
    websiteLink: 'https://kcdk.et',
  },
  {
    title: 'Azure DevOps CI/CD Overhaul — Ablaze Labs',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Rebuilt and optimized the CI/CD pipelines on Azure DevOps, cutting deployment failures by 60% and shrinking release cycles from 2 days to 3 hours.',
    technologies: ['Azure DevOps', 'Azure', 'AKS', 'Docker', 'Kubernetes'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Highly Available RKE2 Clusters — Addispay',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed and operated Rancher RKE2 Kubernetes clusters for high availability and reliability in a fintech environment.',
    technologies: ['Rancher', 'RKE2', 'Kubernetes', 'Linux', 'Docker'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Multi-Platform CI/CD — Kifiya Financial Technology',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and managed CI/CD pipelines across Jenkins, GitHub Actions and GitLab, reducing deployment times and making rollouts smooth and repeatable.',
    technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'AWS', 'Linux'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
];

export const EXPERIENCE = [
  {
    year: 'Oct 2025 – Present',
    title: 'Senior DevOps Engineer',
    company: 'Technolab Interactive PLC',
    description: 'Leading DevOps and cloud infrastructure work in Addis Ababa.',
  },
  {
    year: 'Jan 2025 – Nov 2025',
    title: 'DevOps Engineer',
    company: 'Kifiya Financial Technology PLC',
    description: 'Designed and managed CI/CD pipelines with Jenkins, GitHub Actions and GitLab, reducing deployment times and ensuring smooth rollouts.',
  },
  {
    year: 'Feb 2024 – Jan 2025',
    title: 'DevOps Engineer',
    company: 'Ablaze Labs',
    description: 'Built and optimized CI/CD pipelines with Azure DevOps, cutting deployment failures by 60% and release cycles from 2 days to 3 hours.',
  },
  {
    year: 'Dec 2023 – Sep 2024',
    title: 'DevOps Engineer',
    company: 'Addispay Financial Technology S.C',
    description: 'Deployed and managed Rancher RKE2 clusters for high availability and reliability.',
  },
  {
    year: 'Jun 2022 – Nov 2023',
    title: 'System Administrator & Support Engineer',
    company: 'Hirundo AB Telecommunication VAS',
    description: 'Configured and maintained enterprise-grade servers, networking and support operations.',
  },
  {
    year: '2016 – 2021',
    title: 'BSc, Electrical & Computer Engineering',
    company: 'Adigrat University',
    description: 'Specialized in Computer Engineering.',
  },
];

export const CERTIFICATIONS = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', issued: 'Oct 2025', expires: 'Oct 2028' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', issued: 'Jun 2025', expires: 'Jun 2028' },
];

// Empty values are hidden in the UI.
export const CONTACT = {
  address: 'Addis Ababa, Ethiopia',
  phoneNo: '',
  email: '',
  social: {
    github: '',
    linkedin: 'https://www.linkedin.com/in/tesfamichael-aboset/',
    twitter: '',
  },
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  product: PROJECTS.filter(project => project.category === 'product'),
  devops: PROJECTS.filter(project => project.category === 'devops'),
};
