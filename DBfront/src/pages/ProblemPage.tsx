import React, { useState, memo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ClockIcon, CheckCircleIcon, FileTextIcon, SendIcon, BookOpenIcon } from 'lucide-react';
export function ProblemPage() {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  const [submissionData, setSubmissionData] = useState<Partial<Submission>>({
    status: 'Accepted',
    execution_time: 0,
    memory_used: 0,
    error_type: ''
  });
  const problem = {
    id: '1A',
    title: 'Theatre Square',
    timeLimit: '1 second',
    memoryLimit: '256 megabytes',
    difficulty: 'Easy',
    tags: ['math', 'implementation'],
    description: `Theatre Square in the capital city of Berland has a rectangular shape with the size n × m meters. On the occasion of the city's anniversary, a decision was made to pave the Square with square granite flagstones. Each flagstone is of the size a × a.
What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. The sides of flagstones should be parallel to the sides of the Square.`,
    inputFormat: `The input contains three positive integer numbers in the first line: n,  m and a (1 ≤  n, m, a ≤ 109).`,
    outputFormat: `Write the needed number of flagstones.`,
    examples: [{
      input: '6 6 4',
      output: '4'
    }, {
      input: '1 1 1',
      output: '1'
    }],
    note: 'Examples explanation can go here...'
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const submission = {
        ...submissionData,
        user_id: '',
        problem_id: problem.id,
        code,
        language: selectedLanguage,
        submitted_at: new Date().toISOString()
      };
      console.log('Submitting solution:', submission);
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Problem Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-blue-800">
                  {problem.id}. {problem.title}
                </h1>
                <div className="flex gap-2 mt-2">
                  {problem.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                      {tag}
                    </span>)}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <ClockIcon className="inline-block h-4 w-4 mr-1" />
                  {problem.timeLimit}
                </div>
                <span className={`px-2 py-1 text-xs rounded-full bg-green-100 text-green-800`}>
                  {problem.difficulty}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Problem Statement */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                  Problem Statement
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600">{problem.description}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Input
                  </h3>
                  <p className="text-gray-600">{problem.inputFormat}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Output
                  </h3>
                  <p className="text-gray-600">{problem.outputFormat}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Examples
                  </h3>
                  <div className="space-y-4">
                    {problem.examples.map((example, index) => <div key={index} className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded">
                          <div className="text-sm text-gray-500 mb-2">
                            Input:
                          </div>
                          <pre className="text-sm">{example.input}</pre>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <div className="text-sm text-gray-500 mb-2">
                            Output:
                          </div>
                          <pre className="text-sm">{example.output}</pre>
                        </div>
                      </div>)}
                  </div>
                  {problem.note && <>
                      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                        Note
                      </h3>
                      <p className="text-gray-600">{problem.note}</p>
                    </>}
                </div>
              </div>
            </div>
            {/* Submission Form */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">
                  Submit Solution
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Programming Language
                    </label>
                    <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="w-full border rounded-lg p-2">
                      <option value="cpp">C++ 17</option>
                      <option value="java">Java 11</option>
                      <option value="python">Python 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Code
                    </label>
                    <textarea value={code} onChange={e => setCode(e.target.value)} className="w-full h-64 border rounded-lg p-2 font-mono text-sm" placeholder="Type your solution here..." required />
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Time Limit: {problem.timeLimit}</div>
                    <div>Memory Limit: {problem.memoryLimit}</div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <SendIcon className="h-4 w-4" />
                    Submit
                  </button>
                </form>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">
                  Resources
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <BookOpenIcon className="h-4 w-4" />
                      Editorial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <FileTextIcon className="h-4 w-4" />
                      Submissions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}