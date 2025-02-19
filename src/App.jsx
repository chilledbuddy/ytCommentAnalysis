import { useState } from 'react'
import AnalysisCard from './components/AnalysisCard.jsx';
import InputForm from './components/InputForm.jsx';
import './App.css'

export default function App() {
  const [analysis, setAnalysis] = useState(null);

  const handleAnalysis = (data) => {
    setAnalysis(data);
  };

  return (
    <div className="p-4">
      <InputForm onAnalyze={handleAnalysis} />
      {analysis && <AnalysisCard analysis={analysis} />}
    </div>
  );
}