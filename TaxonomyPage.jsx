import React, { useState } from 'react';
import './TaxonomyPage.css';

const TaxonomyPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('domain');
  const [showAllLevels, setShowAllLevels] = useState(false);
  
  const taxonomicLevels = [
    {
      id: 'domain',
      name: 'Domain',
      shortDescription: 'Broadest category of life',
      longDescription: 'The highest taxonomic rank of organisms in the three-domain system. There are three domains: Archaea, Bacteria, and Eukarya.',
      examples: ['Eukarya', 'Bacteria', 'Archaea'],
      keyPoint: 'The broadest classification level, grouping organisms based on fundamental cellular differences.',
      mnemonic: 'D - Dear',
      color: '#8B5CF6'
    },
    {
      id: 'kingdom',
      name: 'Kingdom',
      shortDescription: 'Major groups of organisms',
      longDescription: 'The second highest taxonomic rank. Organisms are grouped into kingdoms based on general characteristics like cell structure and nutrition.',
      examples: ['Animalia', 'Plantae', 'Fungi', 'Protista', 'Monera'],
      keyPoint: 'Divides organisms into major groups like animals, plants, and fungi.',
      mnemonic: 'K - King',
      color: '#10B981'
    },
    {
      id: 'phylum',
      name: 'Phylum',
      shortDescription: 'Major body plans',
      longDescription: 'Groups organisms based on general body plan or organization. Contains one or more classes.',
      examples: ['Chordata', 'Arthropoda', 'Mollusca', 'Annelida', 'Echinodermata'],
      keyPoint: 'Focuses on fundamental anatomical and developmental characteristics.',
      mnemonic: 'P - Philip',
      color: '#3B82F6'
    },
    {
      id: 'class',
      name: 'Class',
      shortDescription: 'Groups within phylum',
      longDescription: 'A taxonomic rank below phylum and above order. Groups together orders of organisms with common characteristics.',
      examples: ['Mammalia', 'Aves', 'Reptilia', 'Amphibia', 'Insecta'],
      keyPoint: 'Further divides phyla into more specific groups with shared traits.',
      mnemonic: 'C - Came',
      color: '#F59E0B'
    },
    {
      id: 'order',
      name: 'Order',
      shortDescription: 'Groups within class',
      longDescription: 'A taxonomic rank below class and above family. Groups together families of organisms with common characteristics.',
      examples: ['Primates', 'Carnivora', 'Rodentia', 'Chiroptera', 'Artiodactyla'],
      keyPoint: 'Organizes classes into groups with similar behavioral and morphological traits.',
      mnemonic: 'O - Over',
      color: '#EF4444'
    },
    {
      id: 'family',
      name: 'Family',
      shortDescription: 'Groups of related genera',
      longDescription: 'A taxonomic rank below order and above genus. Contains one or more genera that share a set of common characteristics.',
      examples: ['Hominidae', 'Felidae', 'Canidae', 'Ursidae', 'Cervidae'],
      keyPoint: 'Groups together genera that share a relatively recent common ancestor.',
      mnemonic: 'F - For',
      color: '#EC4899'
    },
    {
      id: 'genus',
      name: 'Genus',
      shortDescription: 'Groups of related species',
      longDescription: 'A taxonomic rank below family and above species. Contains one or more species that are closely related.',
      examples: ['Homo', 'Panthera', 'Canis', 'Ursus', 'Quercus'],
      keyPoint: 'The first part of a scientific name (binomial nomenclature).',
      mnemonic: 'G - Good',
      color: '#6366F1'
    },
    {
      id: 'species',
      name: 'Species',
      shortDescription: 'Specific organisms',
      longDescription: 'The basic unit of biological classification. A group of organisms that can interbreed and produce fertile offspring.',
      examples: ['Homo sapiens', 'Panthera leo', 'Canis lupus', 'Ursus arctos', 'Quercus alba'],
      keyPoint: 'The most specific classification level. Uses binomial nomenclature (Genus + species).',
      mnemonic: 'S - Soup',
      color: '#14B8A6'
    }
  ];

  const selectedLevelData = taxonomicLevels.find(level => level.id === selectedLevel);

  // Example organism classification
  const humanClassification = {
    domain: 'Eukarya',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Primates',
    family: 'Hominidae',
    genus: 'Homo',
    species: 'Homo sapiens'
  };

  const handleLevelClick = (levelId) => {
    if (selectedLevel === levelId) {
      setShowAllLevels(!showAllLevels);
    }
    setSelectedLevel(levelId);
  };

  const handlePyramidClick = () => {
    setShowAllLevels(!showAllLevels);
  };

  return (
    <div className="taxonomy-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Hierarchical Classification System</h1>
          <p className="page-subtitle">
            Understanding the taxonomic hierarchy from Domain to Species. Click on any level to learn more.
          </p>
        </header>

        <div className="content-wrapper">
          {/* Left Side - Only Pyramid Visualization */}
          <div className="pyramid-section">
            <div className="pyramid-container">
              <h3 className="pyramid-title">Taxonomic Pyramid</h3>
              <p className="pyramid-subtitle">Click any tier to explore</p>
              
              {/* Pyramid visualization */}
              <div className="pyramid-visual" onClick={handlePyramidClick}>
                {taxonomicLevels.map((level, index) => (
                  <div
                    key={level.id}
                    className={`pyramid-tier ${selectedLevel === level.id ? 'tier-active' : ''} ${
                      showAllLevels ? 'tier-visible' : selectedLevel === level.id ? 'tier-visible' : 'tier-faded'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLevelClick(level.id);
                    }}
                    style={{
                      backgroundColor: level.color,
                      '--tier-index': index
                    }}
                    title={`Click to explore ${level.name}`}
                  >
                    <span className="tier-label">{level.name}</span>
                    <span className="tier-number">{8 - index}</span>
                  </div>
                ))}
              </div>

              {/* Pyramid controls */}
              <div className="pyramid-controls">
                <button 
                  className="pyramid-toggle-btn"
                  onClick={handlePyramidClick}
                >
                  {showAllLevels ? 'Show Only Selected' : 'Show All Levels'}
                </button>
              </div>
            </div>

            {/* Mnemonic Section */}
            <div className="mnemonic-section">
              <h3 className="mnemonic-title">Remember with Mnemonic</h3>
              <div className="mnemonic-phrase">
                <span className="mnemonic-highlight">D</span>ear{" "}
                <span className="mnemonic-highlight">K</span>ing{" "}
                <span className="mnemonic-highlight">P</span>hilip{" "}
                <span className="mnemonic-highlight">C</span>ame{" "}
                <span className="mnemonic-highlight">O</span>ver{" "}
                <span className="mnemonic-highlight">F</span>or{" "}
                <span className="mnemonic-highlight">G</span>ood{" "}
                <span className="mnemonic-highlight">S</span>oup
              </div>
              <p className="mnemonic-explanation">
                <span className="mnemonic-letters">D</span>omain –{" "}
                <span className="mnemonic-letters">K</span>ingdom –{" "}
                <span className="mnemonic-letters">P</span>hylum –{" "}
                <span className="mnemonic-letters">C</span>lass –{" "}
                <span className="mnemonic-letters">O</span>rder –{" "}
                <span className="mnemonic-letters">F</span>amily –{" "}
                <span className="mnemonic-letters">G</span>enus –{" "}
                <span className="mnemonic-letters">S</span>pecies
              </p>
            </div>
          </div>

          {/* Right Side - Combined Content Container */}
          <div className="detail-section">
            <div className="main-content-container">
              {/* Selected Level Details */}
              <div className="level-detail-card">
                <div 
                  className="detail-header"
                  style={{ backgroundColor: selectedLevelData.color }}
                >
                  <div className="detail-rank">
                    <span className="rank-number">Level {8 - taxonomicLevels.findIndex(l => l.id === selectedLevel)}</span>
                    <h2 className="rank-name">{selectedLevelData.name}</h2>
                    <p className="rank-short-desc">{selectedLevelData.shortDescription}</p>
                  </div>
                  <div className="detail-mnemonic">
                    <span className="mnemonic-letter">{selectedLevelData.mnemonic.split(' - ')[0]}</span>
                    <span className="mnemonic-word">{selectedLevelData.mnemonic.split(' - ')[1]}</span>
                  </div>
                </div>

                <div className="detail-content">
                  <div className="description-box">
                    <h3 className="detail-subtitle">Definition</h3>
                    <p className="detail-description">{selectedLevelData.longDescription}</p>
                  </div>

                  <div className="examples-box">
                    <h3 className="detail-subtitle">Examples</h3>
                    <div className="examples-list">
                      {selectedLevelData.examples.map((example, index) => (
                        <span key={index} className="example-tag">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="key-point-box">
                    <h3 className="detail-subtitle">Key Point</h3>
                    <p className="key-point">{selectedLevelData.keyPoint}</p>
                  </div>
                </div>
              </div>

              {/* Complete Classification Example */}
              <div className="classification-example">
                <h3 className="example-title">Complete Classification Example</h3>
                <p className="example-subtitle">Human Classification (Homo sapiens)</p>
                
                <div className="classification-grid">
                  {Object.entries(humanClassification).map(([level, value]) => (
                    <div 
                      key={level} 
                      className={`classification-item ${selectedLevel === level ? 'item-active' : ''}`}
                      onClick={() => handleLevelClick(level)}
                    >
                      <div className="item-level">{level.charAt(0).toUpperCase() + level.slice(1)}</div>
                      <div className="item-value">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div className="key-points-section">
                <h3 className="key-points-title">Key Points to Remember</h3>
                <ul className="key-points-list">
                  <li className="key-point-item">
                    <span className="check-icon">✓</span>
                    <div className="key-point-text">Each level gets more specific as you move down the pyramid</div>
                  </li>
                  <li className="key-point-item">
                    <span className="check-icon">✓</span>
                    <div className="key-point-text">Scientific names use <em>Genus + species</em> (binomial nomenclature)</div>
                  </li>
                  <li className="key-point-item">
                    <span className="check-icon">✓</span>
                    <div className="key-point-text">Organisms in the same species can interbreed and produce fertile offspring</div>
                  </li>
                  <li className="key-point-item">
                    <span className="check-icon">✓</span>
                    <div className="key-point-text">Carolus Linnaeus developed this classification system in the 18th century</div>
                  </li>
                  <li className="key-point-item">
                    <span className="check-icon">✓</span>
                    <div className="key-point-text">The system helps organize biodiversity systematically for study and understanding</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxonomyPage;