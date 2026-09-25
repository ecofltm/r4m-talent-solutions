import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/JobsDetails.css';

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Sample Job 1",
    category: "Logistics",
    location: "Metro Manila, Philippines",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "Sample Job 2",
    category: "Technology",
    location: "Makati City, Philippines",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Sample Job 3",
    category: "RPO & HR",
    location: "Pasig City, Metro Manila",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    title: "Sample Job 4",
    category: "Retail",
    location: "Quezon City, Metro Manila",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    title: "Sample Job 5",
    category: "Manufacturing",
    location: "Laguna, Philippines",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    id: 6,
    title: "Sample Job 6",
    category: "Finance",
    location: "Taguig City, Metro Manila",
    type: "Sample Job",
    posted: "Posted Recently",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

export default function JobsDetails() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', resume: '', message: '' });

  const categories = ['All', 'Logistics', 'Technology', 'RPO & HR', 'Retail', 'Manufacturing', 'Finance'];

  const filteredJobs = SAMPLE_JOBS.filter((job) => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                          job.location.toLowerCase().includes(search.toLowerCase()) ||
                          job.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setApplicant({ name: '', email: '', phone: '', resume: '', message: '' });
    }, 3500);
  };

  return (
    <section className="r4m-jobs-details" id="jobs">
      <div className="r4m-jobs-details__container">
        
        {/* Top Header Block */}
        <div className="r4m-jobs-details__header">
          <span className="r4m-jobs-details__tag">CAREER OPPORTUNITIES</span>
          <h2 className="r4m-jobs-details__title">
            Sample Job <span className="orange-text">Listings</span>
          </h2>
          <p className="r4m-jobs-details__subtitle">
            Explore sample position listings below. Click "Apply Now" on any sample job to submit your application form to R4M Talent Solutions.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="r4m-jobs-controls">
          <div className="r4m-jobs-search-box">
            <i className="bi bi-search r4m-search-icon"></i>
            <input 
              type="text" 
              placeholder="Search sample jobs by keyword, category, or location..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="r4m-jobs-search-input"
            />
          </div>

          <div className="r4m-jobs-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`r4m-jobs-cat-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="r4m-jobs-grid">
          {filteredJobs.length === 0 ? (
            <div className="r4m-jobs-empty">
              <i className="bi bi-briefcase"></i>
              <h3>No sample jobs found matching your search</h3>
              <p>Try adjusting your search keywords or category filters.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="r4m-job-card">
                <div className="r4m-job-card__header">
                  <span className="r4m-job-card__badge">{job.type}</span>
                  <span className="r4m-job-card__posted">{job.posted}</span>
                </div>

                <h3 className="r4m-job-card__title">{job.title}</h3>
                
                <div className="r4m-job-card__meta">
                  <span><i className="bi bi-geo-alt"></i> {job.location}</span>
                  <span><i className="bi bi-folder2-open"></i> {job.category}</span>
                </div>

                <p className="r4m-job-card__desc">{job.desc}</p>

                <div className="r4m-job-card__footer">
                  <Link 
                    to={`/jobs/${job.id}`}
                    className="r4m-job-card__btn"
                  >
                    View Details & Apply <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="r4m-job-modal" onClick={() => setSelectedJob(null)}>
          <div className="r4m-job-modal__content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="r4m-job-modal__close" 
              onClick={() => setSelectedJob(null)}
              aria-label="Close application form"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {appliedSuccess ? (
              <div className="r4m-job-modal__success">
                <i className="bi bi-check-circle-fill"></i>
                <h3>Application Form Submitted!</h3>
                <p>Thank you for submitting your application for <strong>{selectedJob.title}</strong>. Our team will review your submission shortly.</p>
              </div>
            ) : (
              <>
                <div className="r4m-job-modal__header">
                  <span className="r4m-job-modal__tag">CANDIDATE APPLICATION FORM</span>
                  <h2>Apply for {selectedJob.title}</h2>
                  <p><i className="bi bi-geo-alt"></i> {selectedJob.location} • {selectedJob.type}</p>
                </div>

                <form className="r4m-job-modal__form" onSubmit={handleApply}>
                  <div className="r4m-form-group">
                    <label htmlFor="modal-name">Full Name *</label>
                    <input 
                      id="modal-name"
                      type="text" 
                      required 
                      placeholder="Enter your full name" 
                      value={applicant.name} 
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} 
                    />
                  </div>

                  <div className="r4m-form-row">
                    <div className="r4m-form-group">
                      <label htmlFor="modal-email">Email Address *</label>
                      <input 
                        id="modal-email"
                        type="email" 
                        required 
                        placeholder="name@example.com" 
                        value={applicant.email} 
                        onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} 
                      />
                    </div>

                    <div className="r4m-form-group">
                      <label htmlFor="modal-phone">Phone Number *</label>
                      <input 
                        id="modal-phone"
                        type="tel" 
                        required 
                        placeholder="+63 900 000 0000" 
                        value={applicant.phone} 
                        onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })} 
                      />
                    </div>
                  </div>

                  <div className="r4m-form-group">
                    <label htmlFor="modal-resume">Resume / Portfolio URL *</label>
                    <input 
                      id="modal-resume"
                      type="text" 
                      required
                      placeholder="Paste your Google Drive, Dropbox, PDF, or LinkedIn URL" 
                      value={applicant.resume} 
                      onChange={(e) => setApplicant({ ...applicant, resume: e.target.value })} 
                    />
                  </div>

                  <div className="r4m-form-group">
                    <label htmlFor="modal-message">Cover Note / Additional Comments</label>
                    <textarea 
                      id="modal-message"
                      rows="3"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." 
                      value={applicant.message} 
                      onChange={(e) => setApplicant({ ...applicant, message: e.target.value })} 
                    ></textarea>
                  </div>

                  <button type="submit" className="r4m-job-modal__submit">
                    Submit Application Form <i className="bi bi-send-fill"></i>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
