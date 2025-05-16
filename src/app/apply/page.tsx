"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPiggyBank, faCoins, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Apply = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const backStep = () => setStep(prev => prev - 1);

  return (
    <>
      <section className="apply-hero text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Apply for Financial Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-secondary-200">
            Complete our simple application form and one of our financial advisors will contact you shortly.
          </p>
        </div>
      </section>

      <section className="md:hidden bg-primary-600 text-white text-center py-6 px-4">
        <p className="text-sm">
          Complete our simple application form and one of our financial advisors will contact you shortly.
        </p>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${step * 25}%` }}></div>
            </div>

            <div className="p-8 md:p-12">
              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-center text-secondary-800 mb-8">Welcome to Brokers Mutual</h2>
                  <p className="text-center text-secondary-600 mb-8">
                    Lets get started with your application
                  </p>
                  <h3 className="text-2xl font-semibold text-secondary-700 mb-6">
                    What service are you interested in?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[{
                      icon: faChartLine,
                      label: 'Investment Planning'
                    }, {
                      icon: faPiggyBank,
                      label: 'Retirement Solutions'
                    }, {
                      icon: faCoins,
                      label: 'Wealth Management'
                    }, {
                      icon: faHome,
                      label: 'Estate Planning'
                    }].map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full px-6 py-4 border border-gray-200 rounded-lg hover:border-primary-500 transition text-left"
                        onClick={nextStep}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mr-4">
                            <FontAwesomeIcon icon={service.icon} />
                          </div>
                          <span>{service.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-700 mb-6">
                    What are your primary financial goals?
                  </h3>
                  <div className="space-y-4 mb-8">
                    {["Wealth accumulation", "Retirement planning", "Tax optimization", "Education funding", "Estate planning"].map((goal, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`goal${index}`}
                          className="form-checkbox h-5 w-5 text-primary-600 rounded focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor={`goal${index}`} className="ml-2 text-secondary-700">
                          {goal}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 rounded-lg text-secondary-700 hover:bg-gray-50 transition"
                      onClick={backStep}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {/* Add Step 3 and 4 similarly using the same pattern */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;