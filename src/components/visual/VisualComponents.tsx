import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle, 
  Zap, 
  Target, 
  Award,
  ChevronRight,
  Filter,
  Grid3X3,
  List,
  Star
} from 'lucide-react';

// Color schemes for different categories
const categoryColors = {
  DevOps: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  'Cloud Infrastructure': 'bg-accent-500/20 text-accent-400 border-accent-500/30',
  'Full-Stack': 'bg-info-500/20 text-info-400 border-info-500/30',
  'DevOps Tools': 'bg-accent-500/20 text-accent-400 border-accent-500/30',
  Security: 'bg-danger-500/20 text-danger-400 border-danger-500/30',
  Database: 'bg-warn-500/20 text-warn-400 border-warn-500/30',
};

const statusColors = {
  completed: 'bg-primary-500/20 text-primary-400',
  inProgress: 'bg-info-500/20 text-info-400',
  planning: 'bg-gray-500/20 text-gray-400',
};

const difficultyColors = {
  Beginner: 'bg-primary-500/20 text-primary-400',
  Intermediate: 'bg-warn-500/20 text-warn-400',
  Advanced: 'bg-danger-500/20 text-danger-400',
};

// Animated Background Component
export const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-primary-400 overflow-hidden">
      {/* Animated Grid */}
      <div className="fixed inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(86, 180, 233, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(86, 180, 233, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Glowing orbs */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-primary-400/10 rounded-full blur-xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-primary-400/5 rounded-full blur-2xl animate-float" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Tech Badge Component
interface TechBadgeProps {
  name: string;
  category?: keyof typeof categoryColors;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ 
  name, 
  category = 'DevOps', 
  size = 'md', 
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const Component = animated ? motion.span : 'span';
  const props = animated ? {
    whileHover: { scale: 1.05 },
    className: `${sizeClasses[size]} rounded-full font-medium border ${categoryColors[category]} inline-flex items-center gap-1.5`
  } : {
    className: `${sizeClasses[size]} rounded-full font-medium border ${categoryColors[category]} inline-flex items-center gap-1.5`
  };

  return (
    <Component {...props}>
      {name}
    </Component>
  );
};

// Loading Skeleton Component
interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.1 }}
        className="h-4 bg-gray-800 rounded animate-shimmer"
      />
    ))}
  </div>
);

// Stats Card Component
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;
  color?: keyof typeof statusColors;
  trend?: 'up' | 'down' | 'neutral';
  loading?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
  color = 'completed',
  trend = 'neutral',
  loading = false
}) => {
  if (loading) {
    return (
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
        <LoadingSkeleton lines={3} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, borderColor: '#56B4E9' }}
      className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-primary-300 text-sm font-medium">{title}</h3>
        {icon && <div className="text-primary-400">{icon}</div>}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change && (
            <p className={`text-sm flex items-center gap-1 mt-1 ${
              trend === 'up' ? 'text-primary-400' : 
              trend === 'down' ? 'text-danger-400' : 'text-gray-400'
            }`}>
              <TrendingUp className="w-3 h-3" />
              {change}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Progress Bar Component
interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  color = 'bg-primary-500',
  animated = true
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-300">{label}</span>
          <span className="text-primary-400 font-medium">{value}/{max}</span>
        </div>
      )}
      
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 1 : 0, ease: "easeOut" }}
          className={`h-2 rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

// Timeline Component
interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  status: keyof typeof statusColors;
  icon?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  status,
  icon
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative flex gap-4 pb-8"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 ${statusColors[status]} relative z-10`} />
        <div className="w-0.5 h-full bg-gray-700 absolute top-4 left-1/2 transform -translate-x-px" />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-white font-medium">{title}</h4>
          {icon && <div className="text-primary-400">{icon}</div>}
        </div>
        <p className="text-gray-400 text-sm mb-1">{description}</p>
        <p className="text-primary-400 text-xs">{date}</p>
      </div>
    </motion.div>
  );
};

// Interactive Button Component
interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left'
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-400 text-black hover:bg-primary-300 hover:scale-105',
    secondary: 'bg-gray-800 text-primary-400 border border-gray-600 hover:border-primary-400 hover:bg-gray-700',
    outline: 'border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </motion.button>
  );
};

// Category Filter Component
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange('All')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          selectedCategory === 'All'
            ? 'bg-primary-400 text-black'
            : 'bg-gray-800 text-primary-400 border border-gray-600 hover:border-primary-400'
        }`}
      >
        All
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
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
  );
};

// View Toggle Component
interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="flex bg-gray-800 rounded-lg p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-md transition-all duration-300 ${
          view === 'grid'
            ? 'bg-primary-400 text-black'
            : 'text-gray-400 hover:text-primary-400'
        }`}
      >
        <Grid3X3 className="w-4 h-4" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-md transition-all duration-300 ${
          view === 'list'
            ? 'bg-primary-400 text-black'
            : 'text-gray-400 hover:text-primary-400'
        }`}
      >
        <List className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

// Engagement Metrics Component
interface EngagementMetricsProps {
  views?: string;
  likes?: string;
  comments?: string;
  featured?: boolean;
}

export const EngagementMetrics: React.FC<EngagementMetricsProps> = ({
  views,
  likes,
  comments,
  featured = false
}) => {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-400">
      {views && (
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          <span>{views}</span>
        </div>
      )}
      {likes && (
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3" />
          <span>{likes}</span>
        </div>
      )}
      {comments && (
        <div className="flex items-center gap-1">
          <MessageCircle className="w-3 h-3" />
          <span>{comments}</span>
        </div>
      )}
      {featured && (
        <div className="flex items-center gap-1 text-warn-400">
          <Star className="w-3 h-3 fill-current" />
          <span>Featured</span>
        </div>
      )}
    </div>
  );
};

// Export all components and utilities
export {
  categoryColors,
  statusColors,
  difficultyColors
};