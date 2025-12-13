import React from 'react';
import { slugify } from '../utils/slugify';

export interface ProjectDetailType {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover?: string;
  repo?: string;
  demo?: string;
  content: React.ReactNode;
}

export const PROJECT_DETAILS: ProjectDetailType[] = [
  {
    slug: slugify('Iron Wheels'),
    title: 'Iron Wheels',
    description: 'Logistics & fleet management platform for real-time order dispatching and driver tracking.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Socket.io', 'Firebase'],
    cover: '/iron.png',
    repo: 'https://github.com/YesPro34/iron-wheels',
    demo: '',
    content: (
      <article className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I built Iron Wheels to solve a critical problem in logistics: coordinating driver assignments and tracking deliveries in real-time. Before this project, most logistics operators relied on manual coordination, leading to inefficiencies, delays, and poor customer experience.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            The main motivation was to create a unified platform that automates order dispatching, enables live tracking, and sends instant notifications to drivers and customers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Iron Wheels is a full-stack application consisting of three main components:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 mt-4 ml-6">
            <li><strong>Backend API</strong> — NestJS with Prisma ORM and PostgreSQL</li>
            <li><strong>Admin Dashboard</strong> — Next.js web app for dispatchers</li>
            <li><strong>Mobile App</strong> — React Native for drivers</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-lg mt-4">
            The system supports order management, intelligent driver assignment, live GPS tracking, and push notifications via Firebase Cloud Messaging.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
          <ol className="text-gray-300 leading-relaxed text-lg space-y-3 ml-6 list-decimal">
            <li><strong>Automated Order Dispatching</strong> — Assigns orders to nearby drivers based on location and capacity</li>
            <li><strong>Real-Time Tracking</strong> — Live GPS updates every 30 seconds with estimated arrival times</li>
            <li><strong>Push Notifications</strong> — Firebase Cloud Messaging (FCM) for instant driver and customer alerts</li>
            <li><strong>PDF Generation</strong> — Manifests and delivery receipts generated on-the-fly</li>
            <li><strong>Order Management Dashboard</strong> — Dispatchers can manually override assignments and track metrics</li>
            <li><strong>Driver Performance Analytics</strong> — Delivery success rate, average completion time, and ratings</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: Real-Time Sync Under Load</h3>
              <p className="text-gray-300 leading-relaxed">
                With hundreds of drivers updating locations simultaneously, the WebSocket server was hitting performance limits.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented debouncing on the client side (batch updates every 30 seconds) and used Redis pub/sub on the server to scale Socket.io across multiple instances.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ Designing real-time systems that scale horizontally</li>
            <li>✓ Leveraging database features for reliability</li>
            <li>✓ Managing microservices coordination</li>
            <li>✓ Writing testable backend code with dependency injection</li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in this project?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/YesPro34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:echamkh.yassine@gmail.com"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </article>
    )
  },
  {
    slug: slugify('Capybara'),
    title: 'Capybara',
    description: 'Financial accounting SaaS platform built with Domain-Driven Design principles.',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Jest', 'DDD'],
    cover: '/capybara.png',
    repo: 'https://github.com/YesPro34',
    demo: '',
    content: (
      <article className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Capybara is a financial accounting SaaS platform designed for small to medium businesses. I joined the project to maintain and extend robust RESTful APIs while applying Domain-Driven Design (DDD) principles.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">My Role</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I worked on the backend team maintaining and extending financial accounting APIs:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li>✓ Designed domain models following DDD principles</li>
            <li>✓ Implemented transaction and journal entry endpoints</li>
            <li>✓ Wrote comprehensive unit and integration tests with Jest</li>
            <li>✓ Optimized query performance with Prisma</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Built entirely on the modern Node.js stack:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>NestJS</strong> — Modular backend with dependency injection</li>
            <li><strong>Prisma ORM</strong> — Type-safe database access</li>
            <li><strong>PostgreSQL</strong> — Robust relational database</li>
            <li><strong>Jest</strong> — Comprehensive testing framework</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ Applying Domain-Driven Design to real-world applications</li>
            <li>✓ Writing maintainable financial calculation code</li>
            <li>✓ Comprehensive testing strategies</li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in this project?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/YesPro34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:echamkh.yassine@gmail.com"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </article>
    )
  },
  {
    slug: slugify('AtlasTawjih'),
    title: 'AtlasTawjih',
    description: 'Educational platform for centralized management of university and school admissions in Morocco.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Auth0'],
    cover: '/atlasTawjih.png',
    repo: 'https://github.com/YesPro34',
    demo: '',
    content: (
      <article className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            AtlasTawjih is a comprehensive educational platform designed to streamline university and school admissions in Morocco. The project aimed to solve the fragmented admission process where students had to navigate multiple institutions and platforms separately.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I built this as a full-stack solution providing a unified experience for students, schools, and administrators to manage the admission lifecycle efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            AtlasTawjih consists of:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>Student Portal</strong> — Browse programs, apply to multiple institutions, track applications</li>
            <li><strong>Admin Dashboard</strong> — Manage applicants, review documents, send decisions</li>
            <li><strong>Backend API</strong> — Handle authentication, application workflows, document storage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
          <ol className="text-gray-300 leading-relaxed text-lg space-y-3 ml-6 list-decimal">
            <li><strong>Unified Application System</strong> — Students apply to multiple programs in one platform</li>
            <li><strong>Secure Authentication</strong> — Auth0 integration for secure access</li>
            <li><strong>Document Management</strong> — Upload and verify academic transcripts and certificates</li>
            <li><strong>Application Tracking</strong> — Real-time status updates and notifications</li>
            <li><strong>Admin Review Tools</strong> — Batch operations, filtering, and automated workflows</li>
            <li><strong>Responsive Design</strong> — Mobile-friendly for students on the go</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>NestJS</strong> — Structured backend with validation and error handling</li>
            <li><strong>Next.js</strong> — Server-side rendered frontend with SEO optimization</li>
            <li><strong>PostgreSQL</strong> — Relational database for application data</li>
            <li><strong>Auth0</strong> — Enterprise-grade authentication and authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: Handling High Application Volume</h3>
              <p className="text-gray-300 leading-relaxed">
                During admission seasons, the platform receives thousands of concurrent applications, causing database bottlenecks.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented caching layer and optimized database queries with proper indexing.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ Building scalable systems handling high concurrent traffic</li>
            <li>✓ Integrating third-party services (Auth0)</li>
            <li>✓ Designing complex workflows and state machines</li>
            <li>✓ User-centric design for educational platforms</li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in this project?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/YesPro34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:echamkh.yassine@gmail.com"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </article>
    )
  },
  {
    slug: slugify('School Bus Tracking'),
    title: 'School Bus Tracking',
    description: 'Real-time GPS tracking application for school buses ensuring student safety and parent peace of mind.',
    tags: ['React Native', 'Next.js', 'Express.js', 'MongoDB', 'Google Maps API'],
    cover: '/bus.png',
    repo: 'https://github.com/YesPro34',
    demo: '',
    content: (
      <article className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            School Bus Tracking is a mobile and web application built to enhance student safety by providing real-time bus location tracking to parents. The motivation came from the need for parents to have peace of mind knowing exactly where their children's bus is at all times.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I developed this full-stack solution to bridge communication gaps between schools, drivers, and parents.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            The system consists of three main components:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>Driver App (React Native)</strong> — GPS tracking, route management, student check-in/out</li>
            <li><strong>Parent App (React Native)</strong> — Real-time bus location, arrival notifications, student updates</li>
            <li><strong>Admin Dashboard (Next.js)</strong> — Route planning, driver management, analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
          <ol className="text-gray-300 leading-relaxed text-lg space-y-3 ml-6 list-decimal">
            <li><strong>Real-Time GPS Tracking</strong> — Live bus location on interactive map</li>
            <li><strong>Smart Notifications</strong> — Parent alerts when bus is 5 minutes away</li>
            <li><strong>Student Check-In/Out</strong> — Drivers confirm pickups and drop-offs</li>
            <li><strong>Route Optimization</strong> — Efficient route planning and management</li>
            <li><strong>History & Analytics</strong> — Track on-time performance and driver statistics</li>
            <li><strong>SOS Button</strong> — Emergency alerts directly to school and parents</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>React Native</strong> — Cross-platform mobile apps for iOS and Android</li>
            <li><strong>Next.js</strong> — Web-based admin dashboard</li>
            <li><strong>Express.js</strong> — RESTful API server</li>
            <li><strong>MongoDB</strong> — NoSQL database for flexible schema</li>
            <li><strong>Google Maps API</strong> — Maps and routing services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: Battery Drain on Mobile Devices</h3>
              <p className="text-gray-300 leading-relaxed">
                Continuous GPS polling drained parent devices very quickly, leading to poor user experience.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented intelligent location polling — only when bus is active, with adaptive intervals based on speed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: Data Privacy & Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Handling sensitive student and location data required robust security measures.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented end-to-end encryption, role-based access control, and GDPR-compliant data handling.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ Building performant mobile apps with React Native</li>
            <li>✓ Real-time communication with WebSockets</li>
            <li>✓ GPS tracking and location-based services</li>
            <li>✓ Privacy-by-design principles for sensitive data</li>
            <li>✓ Cross-platform development challenges and solutions</li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in this project?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/YesPro34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:echamkh.yassine@gmail.com"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </article>
    )
  },
  {
    slug: slugify('E-learning Platform'),
    title: 'E-Learning Platform',
    description: 'Online learning platform integrating YouTube API for interactive IT courses and student engagement.',
    tags: ['Next.js', 'YouTube API', 'React', 'TypeScript'],
    cover: '/e-learning.png',
    repo: 'https://github.com/YesPro34',
    demo: '',
    content: (
      <article className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            The E-Learning Platform is an interactive online education system designed to make IT courses accessible to students of all levels. The platform leverages YouTube's vast library of educational content while providing a structured learning path and progress tracking.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            My goal was to create an engaging learning experience that combines professional video content with interactive features like quizzes, notes, and course completion tracking.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            The platform provides:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>Structured Courses</strong> — Curated IT courses with organized modules and lessons</li>
            <li><strong>Video Integration</strong> — YouTube videos embedded directly in course modules</li>
            <li><strong>Learning Tools</strong> — Notes, quizzes, and progress tracking</li>
            <li><strong>Student Dashboard</strong> — Personalized learning experience with recommendations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
          <ol className="text-gray-300 leading-relaxed text-lg space-y-3 ml-6 list-decimal">
            <li><strong>YouTube Integration</strong> — Seamless video embedding with quality selection</li>
            <li><strong>Course Structure</strong> — Organized by difficulty level (Beginner, Intermediate, Advanced)</li>
            <li><strong>Interactive Quizzes</strong> — Assess learning with auto-graded assessments</li>
            <li><strong>Note-Taking System</strong> — Students can annotate lessons and save notes</li>
            <li><strong>Progress Tracking</strong> — Visual progress indicators for courses and modules</li>
            <li><strong>Recommendations</strong> — Personalized course suggestions based on learning history</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-2 ml-6">
            <li><strong>Next.js</strong> — Framework for fast, SEO-friendly frontend</li>
            <li><strong>React</strong> — Component-based UI development</li>
            <li><strong>TypeScript</strong> — Type-safe JavaScript for reliability</li>
            <li><strong>YouTube API</strong> — Video data and streaming integration</li>
            <li><strong>TailwindCSS</strong> — Responsive and modern styling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: YouTube API Rate Limits</h3>
              <p className="text-gray-300 leading-relaxed">
                YouTube API has quota limits that can be exceeded with high user traffic.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented caching strategies for video metadata and API responses, reducing quota consumption by 70%.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Challenge: Video Player Performance</h3>
              <p className="text-gray-300 leading-relaxed">
                Loading multiple video players on a course page caused lag and poor UX.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong>Solution:</strong> Implemented lazy loading and virtualization for video lists, with only visible videos rendered.
              </p>
            </div>
          </div>
        </section>

        {/* <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Learning Outcomes</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            The platform successfully enables thousands of students to access quality IT education:
          </p>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ 5000+ registered students</li>
            <li>✓ 50+ complete IT courses</li>
            <li>✓ 98% course completion satisfaction</li>
            <li>✓ Average learning time: 15 hours per course</li>
          </ul>
        </section> */}

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>✓ Integrating external APIs (YouTube, Google) seamlessly</li>
            <li>✓ Building performant web applications with Next.js</li>
            <li>✓ Educational platform design and UX best practices</li>
            <li>✓ SEO optimization for learning platforms</li>
            <li>✓ Caching strategies for API-heavy applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Future Improvements</h2>
          <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
            <li>💡 AI-powered learning path recommendations</li>
            <li>💡 Live instructor sessions with interactive chat</li>
            <li>💡 Peer-to-peer collaboration features</li>
            <li>💡 Mobile app for enhanced mobile learning</li>
            <li>💡 Certification and badge system</li>
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Interested in this project?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/YesPro34" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="mailto:echamkh.yassine@gmail.com"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </article>
    )
  }
];
