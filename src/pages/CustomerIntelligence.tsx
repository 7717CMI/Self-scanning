import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

interface CustomerIntelligenceProps {
  onNavigate: (page: string) => void
}

type Proposition = 'proposition1' | 'proposition2' | 'proposition3'

interface CustomerData {
  sNo: number
  customerName: string
  parentGroup: string
  retailFormat: string
  regionCountry: string
  storeFootprint: string
  selfScanningStatus: string
  keyContact: string
  designation: string
  emailAddress: string
  phoneWhatsApp: string
  linkedinProfile: string
  websiteURL: string
  primaryMotivation: string
  upcomingTriggers: string
  shrinkRiskSensitivity: string
  // Purchasing Behaviour fields (for Proposition 2 & 3)
  decisionMakers?: string
  procurementModel?: string
  budgetApproach?: string
  // Solution Requirements fields (for Proposition 3)
  preferredSolutionType?: string
  preferredModelType?: string
  preferredTechnology?: string
  integrationRequirements?: string
  deploymentIntensity?: string
  serviceExpectations?: string
  otherConstraints?: string
  // CMI Insights fields (for Proposition 3)
  customerBenchmarking?: string
  additionalComments?: string
}

export function CustomerIntelligence({ onNavigate }: CustomerIntelligenceProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const [activeProposition, setActiveProposition] = useState<Proposition>('proposition1')
  const topScrollRef = useRef<HTMLDivElement>(null)
  const tableScrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const topScroll = topScrollRef.current
    const tableScroll = tableScrollRef.current
    
    if (topScroll && tableScroll) {
      const table = tableScroll.querySelector('table')
      if (table) {
        const scrollContent = topScroll.querySelector('div')
        if (scrollContent) {
          scrollContent.style.width = `${table.scrollWidth}px`
        }
      }
    }
  }, [activeProposition])

  // Sample data based on the image
  const proposition1Data: CustomerData[] = [
    {
      sNo: 1,
      customerName: 'Customer 1',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 2,
      customerName: 'Customer 2',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 3,
      customerName: 'Customer 3',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 4,
      customerName: 'Customer 4',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 5,
      customerName: 'Customer 5',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 6,
      customerName: 'Customer 6',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 7,
      customerName: 'Customer 7',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 8,
      customerName: 'Customer 8',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 9,
      customerName: 'Customer 9',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 10,
      customerName: 'Customer 10',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 11,
      customerName: 'Customer 11',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 12,
      customerName: 'Customer 12',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 13,
      customerName: 'Customer 13',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 14,
      customerName: 'Customer 14',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 15,
      customerName: 'Customer 15',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 16,
      customerName: 'Customer 16',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 17,
      customerName: 'Customer 17',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    },
    {
      sNo: 18,
      customerName: 'Customer 18',
      parentGroup: 'xx',
      retailFormat: 'xx',
      regionCountry: 'xx',
      storeFootprint: 'xx',
      selfScanningStatus: 'xx',
      keyContact: 'xx',
      designation: 'xx',
      emailAddress: 'xx',
      phoneWhatsApp: 'xx',
      linkedinProfile: 'xx',
      websiteURL: 'xx',
      primaryMotivation: 'xx',
      upcomingTriggers: 'xx',
      shrinkRiskSensitivity: 'xx'
    }
  ]

  // Proposition 2 data with Purchasing Behaviour
  const proposition2Data: CustomerData[] = proposition1Data.map(item => ({
    ...item,
    decisionMakers: 'xx',
    procurementModel: 'xx',
    budgetApproach: 'xx'
  }))
  
  // Proposition 3 data with Solution Requirements and CMI Insights
  const proposition3Data: CustomerData[] = proposition1Data.map(item => ({
    ...item,
    decisionMakers: 'xx',
    procurementModel: 'xx',
    budgetApproach: 'xx',
    preferredSolutionType: 'xx',
    preferredModelType: 'xx',
    preferredTechnology: 'xx',
    integrationRequirements: 'xx',
    deploymentIntensity: 'xx',
    serviceExpectations: 'xx',
    otherConstraints: 'xx',
    customerBenchmarking: 'xx',
    additionalComments: 'xx'
  }))

  const getCurrentData = () => {
    if (activeProposition === 'proposition2') {
      return proposition2Data
    }
    if (activeProposition === 'proposition3') {
      return proposition3Data
    }
    return proposition1Data
  }

  const exportToCSV = () => {
    const data = getCurrentData()
    const headers = ['S.No.', 'Customer / Retailer Name', 'Parent Group / Brand', 'Retail Format', 
                     'Region / Country Presence', 'Store Footprint', 'Current Self-Scanning Status',
                     'Key Contact Person', 'Designation / Function', 'Email Address', 
                     'Phone / WhatsApp Number', 'LinkedIn Profile', 'Website URL',
                     'Primary Motivation for Self-Scanning', 'Upcoming Triggers / Initiatives',
                     'Shrink / Fraud Risk Sensitivity']
    
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        [row.sNo, row.customerName, row.parentGroup, row.retailFormat, row.regionCountry,
         row.storeFootprint, row.selfScanningStatus, row.keyContact, row.designation,
         row.emailAddress, row.phoneWhatsApp, row.linkedinProfile, row.websiteURL,
         row.primaryMotivation, row.upcomingTriggers, row.shrinkRiskSensitivity]
          .map(val => `"${String(val).replace(/"/g, '""')}"`)
          .join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `customer_intelligence_${activeProposition}.csv`
    link.click()
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex justify-end items-start mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={exportToCSV}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          <Download size={20} />
          Export CSV
        </motion.button>
      </div>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
          GLOBAL RETAIL SELF SCANNING SOLUTION MARKET DATABASE
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Comprehensive intelligence on global retail self-scanning solution market
        </p>
      </motion.div>

      {/* Proposition Tabs */}
      <div className={`p-6 rounded-2xl mb-8 shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveProposition('proposition1')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition1'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 1
          </button>
          <button
            onClick={() => setActiveProposition('proposition2')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition2'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 2
          </button>
          <button
            onClick={() => setActiveProposition('proposition3')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition3'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 3
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className={`p-8 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        {/* Top Scrollbar */}
        <div 
          ref={topScrollRef}
          className="overflow-x-auto mb-2"
          onScroll={(e) => {
            if (tableScrollRef.current) {
              tableScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <div style={{ height: '1px' }}></div>
        </div>
        
        <div 
          ref={tableScrollRef}
          className="overflow-x-auto"
          onScroll={(e) => {
            if (topScrollRef.current) {
              topScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <table className="w-full border-collapse text-sm min-w-max">
            <thead>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Customer Information
                </th>
                <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Contact Details
                </th>
                <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'} ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Personal/ Professional Branding Drivers
                </th>
                {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                  <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Purchasing Behaviour
                  </th>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-yellow-200 text-gray-900' : 'bg-yellow-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Solution Requirements
                    </th>
                    <th colSpan={2} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-blue-200 text-gray-900' : 'bg-blue-100 text-gray-900'}`}>
                      CMI Insights
                    </th>
                  </>
                )}
              </tr>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  S.No.
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Customer / Retailer Name
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Parent Group / Brand
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Retail Format</div>
                  <div className="text-xs">(Supermarket/Convenience/</div>
                  <div className="text-xs">Specialty/Dept Store/Pharmacy)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Region / Country</div>
                  <div>Presence</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Store Footprint</div>
                  <div className="text-xs">(No. of stores)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Current Self-Scanning</div>
                  <div>Status</div>
                  <div className="text-xs">(None / Pilot / Partial</div>
                  <div className="text-xs">Rollout / Full Rollout)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Key Contact Person
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Designation / Function</div>
                  <div className="text-xs">(Store Ops / IT-Digital /</div>
                  <div className="text-xs">Innovation / Loss Prevention /</div>
                  <div className="text-xs">Procurement / Finance)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Email Address
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Phone/ WhatsApp Number
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  LinkedIn Profile
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Website URL
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Primary Motivation for</div>
                  <div>Self-Scanning</div>
                  <div className="text-xs">(speed, labor reduction,</div>
                  <div className="text-xs">loyalty data, contactless,</div>
                  <div className="text-xs">basket uplift)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Upcoming Triggers /</div>
                  <div>Initiatives</div>
                  <div className="text-xs">(new stores, refurb, digital</div>
                  <div className="text-xs">program, cashless push,</div>
                  <div className="text-xs">labor constraints)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Shrink / Fraud Risk</div>
                  <div>Sensitivity</div>
                  <div className="text-xs">(High/Med/Low)</div>
                </th>
                {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Decision Makers</div>
                      <div className="text-xs">(CIO/CTO, Head Store Ops,</div>
                      <div className="text-xs">Digital, LP, Procurement,</div>
                      <div className="text-xs">CFO, CEO)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Procurement Model</div>
                      <div className="text-xs">(Direct buy / Lease / SaaS /</div>
                      <div className="text-xs">Managed service /</div>
                      <div className="text-xs">via POS integrator)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Budget Approach / Tier</div>
                      <div className="text-xs">(Capex/Opex/Hybrid;</div>
                      <div className="text-xs">Entry/Mid/Premium)</div>
                    </th>
                  </>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Solution Type</div>
                      <div className="text-xs">(Fixed kiosk;</div>
                      <div className="text-xs">Smartphone/presentation;</div>
                      <div className="text-xs">Mobile: dedicated/</div>
                      <div className="text-xs">smartphone/smart-cart)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Model Type</div>
                      <div className="text-xs">(Cash / Cashless / Both)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Technology</div>
                      <div className="text-xs">(Barcode / RFID /</div>
                      <div className="text-xs">CV-AI / NFC / Mix)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Integration Requirements</div>
                      <div className="text-xs">(POS/ERP/logging/app;</div>
                      <div className="text-xs">existing vendors)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Deployment Intensity /</div>
                      <div>Timeline</div>
                      <div className="text-xs">(Pilot phased 6-12 mo /</div>
                      <div className="text-xs">chainwide 1-3 yrs)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Service Expectations</div>
                      <div className="text-xs">(install, maintenance,</div>
                      <div className="text-xs">analytics, training,</div>
                      <div className="text-xs">LP/shrink features)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Other Constraints</div>
                      <div className="text-xs">(data privacy, onboarding,</div>
                      <div className="text-xs">vs. labor rules,</div>
                      <div className="text-xs">accessibility, space, local)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Customer Benchmarking</div>
                      <div>Summary</div>
                      <div className="text-xs">(Potential Customers/</div>
                      <div className="text-xs">Peer Group)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'}`}>
                      <div>Additional Comments/</div>
                      <div>Notes by CMI Team</div>
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {getCurrentData().map((row, index) => (
                <tr 
                  key={index}
                  className={`border-b ${isDark ? 'border-navy-light hover:bg-navy-dark' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
                >
                  <td className={`px-3 py-3 text-center text-text-primary-light dark:text-text-primary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.sNo}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.customerName}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.parentGroup}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.retailFormat}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.regionCountry}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.storeFootprint}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.selfScanningStatus}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.keyContact}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.designation}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.emailAddress !== 'xx' ? (
                      <a href={`mailto:${row.emailAddress}`} className="text-electric-blue hover:underline">
                        {row.emailAddress}
                      </a>
                    ) : row.emailAddress}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.phoneWhatsApp}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.linkedinProfile !== 'xx' ? (
                      <a href={`https://${row.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                        {row.linkedinProfile}
                      </a>
                    ) : row.linkedinProfile}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.websiteURL !== 'xx' ? (
                      <a href={`https://${row.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                        {row.websiteURL}
                      </a>
                    ) : row.websiteURL}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.primaryMotivation}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.upcomingTriggers}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.shrinkRiskSensitivity}
                  </td>
                  {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                    <>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.decisionMakers || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.procurementModel || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.budgetApproach || 'xx'}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredSolutionType || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredModelType || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredTechnology || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.integrationRequirements || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.deploymentIntensity || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.serviceExpectations || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.otherConstraints || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerBenchmarking || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark`}>
                        {row.additionalComments || 'xx'}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
