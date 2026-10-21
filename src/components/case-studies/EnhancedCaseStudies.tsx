import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Target, 
  Users, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Settings,
  GitBranch,
  Container,
  Globe,
  Server,
  Lock,
  Cpu,
  Network,
  Monitor
} from 'lucide-react';
import { 
  AnimatedBackground, 
  TechBadge, 
  StatsCard, 
  ProgressBar, 
  TimelineItem, 
  InteractiveButton,
  categoryColors,
  statusColors,
  difficultyColors
} from '../visual/VisualComponents';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: keyof typeof categoryColors;
  featured: boolean;
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenge: string;
  solution: string[];
  impact: string[];
  technologies: string[];
  impactMetrics: {
    deploymentTime?: { before: string; after: string; improvement: string };
    cost?: { before: string; after: string; reduction: string };
    performance?: { improvement: string };
    availability?: { uptime: string; improvement: string };
    scalability?: { capacity: string; improvement: string };
  };
  architecture?: {
    components: string[];
    pattern: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "uSend — Email API for Developers",
    subtitle: "Transactional email, inbound mail and webhooks behind one API",
    category: "Cloud Infrastructure",
    featured: true,
    timeline: {
      start: "Founder",
      end: "Live at usend.et",
      duration: "Ongoing"
    },
    challenge: "Developers in Ethiopia had no simple way to send reliable transactional email and pay for it locally. Running mail servers is painful, and international providers mean card-only USD billing plus manual DKIM, SPF and DMARC setup.",
    solution: [
      "REST API at api.usend.et plus SMTP relay on ports 587/465, both with API-key auth",
      "Sending and receiving run on Amazon SES; inbound mail needs a single MX record and arrives as JSON with attachments",
      "Delivery, bounce, open and click events delivered as Standard Webhooks-signed payloads, retried for a day and replayable",
      "One-click DNS for DKIM, SPF and DMARC, with Cloudflare auto-configure and continuous re-checks",
      "Batches of up to 100, scheduling up to 30 days ahead, idempotency keys, templates and broadcasts",
      "Official SDKs: @usend/node on npm and usend on PyPI"
    ],
    impact: [
      "Free tier of 3,000 emails/month to get started",
      "Billing in ETB through Telebirr, or USD by card",
      "Bounces and complaints suppressed automatically to protect sender reputation",
      "Quickstarts for about 35 frameworks and DNS guides for 13 providers"
    ],
    technologies: ["Amazon SES", "REST API", "SMTP", "Webhooks", "DKIM / SPF / DMARC", "Cloudflare", "Node.js", "Python"],
    impactMetrics: {},
    architecture: {
      components: ["REST API", "SMTP Relay", "Amazon SES", "Inbound MX", "Webhook Dispatcher", "DNS Verifier"],
      pattern: "Managed email platform"
    }
  },
  {
    id: 2,
    title: "KCDK — The Control Plane for Your AWS",
    subtitle: "Every stack. Every script. One console.",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Founder",
      end: "Live at kcdk.et",
      duration: "Ongoing"
    },
    challenge: "Real production AWS accounts are built three ways at once: CDK, plain CloudFormation, and bash scripts or console clicks. Half of production isn't in any template, so nobody can see what owns what, and operating it means jumping between tools.",
    solution: [
      "Read-only account scan that maps every CloudFormation stack (CDK or not) and ECS services created outside any stack, using only List and Describe calls",
      "Deploys real CDK apps from GitHub, GitLab, Bitbucket or any git server using AWS's own CDK Toolkit Library, with no adapter or rewrite",
      "Template stacks (VPC, load balancer, Fargate, databases) built from a form, with backups, alarms and CI deploy roles included",
      "Shells, logs and database checks for MongoDB, Kafka and Redis sit next to the deploy button, even on stacks it only attached",
      "Cross-account IAM role with External ID and short-lived credentials, or AES-256-GCM encrypted access keys",
      "Organizations with Owner/Admin/Deployer/Viewer roles, custom roles and enforced two-factor"
    ],
    impact: [
      "Mapped a design partner's production account, built three different ways, in about 15 seconds without changing anything",
      "ECS services that had been created by bash scripts got a shell, logs and an alarm check",
      "Priced per AWS account connected, never per user, resource or deploy"
    ],
    technologies: ["AWS CDK", "CloudFormation", "ECS / Fargate", "IAM", "Git Integrations", "RBAC", "2FA"],
    impactMetrics: {},
    architecture: {
      components: ["Account Scanner", "CDK Toolkit Runner", "Template Builder", "Run History", "Shell & Logs", "RBAC"],
      pattern: "Multi-tenant control plane"
    }
  },
  {
    id: 3,
    title: "Azure DevOps CI/CD Overhaul",
    subtitle: "Ablaze Labs · Faster, safer releases",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Feb 2024",
      end: "Jan 2025",
      duration: "1 year"
    },
    challenge: "Releases took around two days and failed deployments were common, which slowed product teams down and made every release risky.",
    solution: [
      "Rebuilt the build and release pipelines on Azure DevOps",
      "Standardized containerized builds with Docker",
      "Automated deployments to Kubernetes on Azure"
    ],
    impact: [
      "Deployment failures cut by 60%",
      "Release cycle reduced from 2 days to 3 hours"
    ],
    technologies: ["Azure DevOps", "Azure", "AKS", "Docker", "Kubernetes"],
    impactMetrics: {
      deploymentTime: { before: "2 days", after: "3 hours", improvement: "94%" }
    },
    architecture: {
      components: ["Azure Repos", "Build Pipelines", "Container Registry", "Release Pipelines", "AKS"],
      pattern: "Pipeline-driven continuous delivery"
    }
  }
];

const EnhancedCaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(caseStudies[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'results'>('overview');

  const selectedStudyData = caseStudies.find(study => study.id === selectedStudy);

  const categories = ['All', 'DevOps', 'Cloud Infrastructure'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const getIconForMetric = (metric: string) => {
    switch (metric) {
      case 'deploymentTime': return <Zap className="w-5 h-5" />;
      case 'cost': return <TrendingUp className="w-5 h-5" />;
      case 'performance': return <BarChart3 className="w-5 h-5" />;
      case 'availability': return <Target className="w-5 h-5" />;
      case 'scalability': return <TrendingUp className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <AnimatedBackground>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            CASE_STUDIES.EXE
          </h1>
          <p className="text-primary-200 text-lg max-w-3xl mx-auto">
            The problem, how I solved it, and what changed. Two products I run, and one platform rebuild.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <StatsCard
            title="Case Studies"
            value="3"
            icon={<FileText className="w-6 h-6" />}
            color="completed"
          />
          <StatsCard
            title="Release Cycle"
            value="2d → 3h"
            change="Ablaze Labs, Azure DevOps"
            icon={<TrendingUp className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
          <StatsCard
            title="Failed Deployments"
            value="−60%"
            change="After pipeline rebuild"
            icon={<Target className="w-6 h-6" />}
            color="completed"
            trend="up"
          />
        </motion.div>

        {/* Study Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-400 text-black'
                    : 'bg-gray-800 text-primary-400 border border-gray-600 hover:border-primary-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStudy(study.id)}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                  selectedStudy === study.id
                    ? 'bg-primary-400/10 border-primary-400'
                    : 'bg-gray-900/50 border-gray-700 hover:border-primary-400/50'
                } ${study.featured ? 'ring-2 ring-warn-400/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <TechBadge name={study.category} category={study.category} size="sm" />
                  {study.featured && (
                    <span className="text-xs text-warn-400 font-medium">⭐ Featured</span>
                  )}
                </div>
                
                <h3 className="text-white font-bold mb-1 text-sm line-clamp-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                  {study.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{study.timeline.duration}</span>
                  <span>•</span>
                  <span>{study.timeline.start} - {study.timeline.end}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Study Details */}
        <AnimatePresence mode="wait">
          {selectedStudyData && (
            <motion.div
              key={selectedStudyData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Study Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <TechBadge name={selectedStudyData.category} category={selectedStudyData.category} />
                      {selectedStudyData.featured && (
                        <span className="text-xs text-warn-400 font-medium">⭐ Featured Project</span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedStudyData.title}
                    </h2>
                    <p className="text-primary-400 text-lg">
                      {selectedStudyData.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                      <p className="font-medium">{selectedStudyData.timeline.start}</p>
                      <p className="text-xs">Start Date</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                      <p className="font-medium">{selectedStudyData.timeline.duration}</p>
                      <p className="text-xs">Duration</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                      <p className="font-medium">{selectedStudyData.timeline.end}</p>
                      <p className="text-xs">Completion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-700">
                {[
                  { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
                  { id: 'solution', label: 'Solution', icon: <Code className="w-4 h-4" /> },
                  { id: 'results', label: 'Results', icon: <BarChart3 className="w-4 h-4" /> }
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-primary-400 border-b-2 border-primary-400'
                        : 'text-gray-400 hover:text-primary-400'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Challenge
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedStudyData.challenge}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                              <Settings className="w-5 h-5" />
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.technologies.map((tech) => (
                                <TechBadge key={tech} name={tech} category={selectedStudyData.category} size="sm" />
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                              <GitBranch className="w-5 h-5" />
                              Architecture Pattern
                            </h3>
                            <p className="text-gray-300 mb-2 font-medium">
                              {selectedStudyData.architecture?.pattern}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {selectedStudyData.architecture?.components.map((component) => (
                                <span key={component} className="px-2 py-1 bg-gray-800 text-primary-400 text-xs rounded">
                                  {component}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'solution' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Solution Approach
                        </h3>
                        <div className="space-y-4">
                          {selectedStudyData.solution.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-4 p-4 bg-gray-800/50 rounded-lg"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-primary-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </div>
                              <p className="text-gray-300 leading-relaxed flex-1">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'results' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          Impact & Results
                        </h3>

                        {/* Impact Metrics */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {Object.entries(selectedStudyData.impactMetrics).map(([key, metrics]) => (
                            <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                {getIconForMetric(key)}
                                <h4 className="font-bold text-white capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                              </div>
                              
                              {key === 'deploymentTime' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).improvement && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-danger-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-primary-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-primary-400">-{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'cost' && metrics && (metrics as any).before && (metrics as any).after && (metrics as any).reduction && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Before</span>
                                    <span className="text-danger-400">{(metrics as any).before}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">After</span>
                                    <span className="text-primary-400">{(metrics as any).after}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Reduction</span>
                                    <span className="text-primary-400">-{(metrics as any).reduction}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'availability' && metrics && 'uptime' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Uptime</span>
                                    <span className="text-primary-400">{(metrics as any).uptime}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-primary-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'scalability' && metrics && 'capacity' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Capacity</span>
                                    <span className="text-primary-400">{(metrics as any).capacity}</span>
                                  </div>
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Improvement</span>
                                    <span className="text-primary-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}

                              {key === 'performance' && metrics && 'improvement' in metrics && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm font-bold">
                                    <span className="text-gray-400">Performance Gain</span>
                                    <span className="text-primary-400">+{(metrics as any).improvement}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Impact List */}
                        <div className="space-y-3">
                          {selectedStudyData.impact.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-primary-500/10 border border-primary-500/30 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-300 leading-relaxed">{item}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-4">
            INTERESTED_IN_A_SIMILAR_PROJECT?
          </h2>
          <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
            Tell me about your stack and I'll tell you how I'd make it faster, safer and easier to see.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveButton variant="primary" icon={<ArrowRight className="w-4 h-4" />} onClick={() => { window.location.href = '/contact'; }}>
              Get in Touch
            </InteractiveButton>
            
            <InteractiveButton variant="outline" icon={<Globe className="w-4 h-4" />} onClick={() => { window.open('https://kcdk.et', '_blank', 'noopener'); }}>
              Try KCDK
            </InteractiveButton>
          </div>
        </motion.section>
      </div>
    </AnimatedBackground>
  );
};

export default EnhancedCaseStudies;