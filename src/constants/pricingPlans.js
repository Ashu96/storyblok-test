export const PLAN_TYPES = {
  Startup: 'Startup',
  Growth: 'Growth',
  Thriving: 'Thriving',
  Established: 'Established'
}

const PAYMENT_CYCLE = {
  annually: 'Annually',
  monthly: 'Monthly',
  quarterly: 'Quarterly'
}

const FEATURES = {
  hours: `Hours (phone/video/chat)`,
  dataAndReports: `Data & Insights Report`,
  launchSupport: `Launch Support`,
  accountManger: `Account Manager`,
  criticalIncidentPhone: `Critical Incident (phone/video/chat)`,
  upskill: `Upskill Digital Resilience Training`,
  digitalManager: `Digital Manager Mental Health Training`,
  promotional: `Promotional materials`,
  crisis: `Crisis Phone Line`,
  technicalSupport: `Technical Support`,
  digitalEmployee: `Digital Employee Mental Health Awareness Training`,
  digitalWellbeing: `Digital Wellbeing Check Tool`,
  monthlyWellbeing: `Monthly Wellbeing Tips Newsletter`,
  criticalIncidentOnSite: `Critical Incident (On site/in person)`,
  face2face: `Face to face Therapy`,
  legalSupport: `Legal Support`
}

export const PLANS = {
  [PLAN_TYPES.Startup]: {
    id: 0,
    name: PLAN_TYPES.Startup,
    price: 2625,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `25 hrs @$105 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.annually
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: `-`
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: `-`
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  [PLAN_TYPES.Growth]: {
    id: 1,
    name: PLAN_TYPES.Growth,
    price: 4900,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `50 hrs @$98 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.annually
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  [PLAN_TYPES.Thriving]: {
    id: 2,
    name: PLAN_TYPES.Thriving,
    price: 9100,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `100 hrs @$91 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.quarterly
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  [PLAN_TYPES.Established]: {
    id: 3,
    name: PLAN_TYPES.Established,
    price: 17000,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `50 hrs @$98 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.quarterly
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  }
}

export const plans = [
  {
    id: 0,
    name: PLAN_TYPES.Startup,
    price: 2625,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `25 hrs @$105 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.annually
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: `-`
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: `-`
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  {
    id: 1,
    name: PLAN_TYPES.Growth,
    price: 4900,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `50 hrs @$98 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.annually
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  {
    id: 2,
    name: PLAN_TYPES.Thriving,
    price: 9100,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `100 hrs @$91 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.quarterly
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  },
  {
    id: 3,
    name: PLAN_TYPES.Established,
    price: 17000,
    paymentCycle: PAYMENT_CYCLE.annually,
    features: [
      {
        id: 0,
        name: FEATURES.hours,
        value: `50 hrs @$98 p/hr`
      },
      {
        id: 1,
        name: FEATURES.dataAndReports,
        value: PAYMENT_CYCLE.quarterly
      },
      {
        id: 2,
        name: FEATURES.launchSupport,
        value: true
      },
      {
        id: 3,
        name: FEATURES.accountManger,
        value: true
      },
      {
        id: 4,
        name: FEATURES.criticalIncidentPhone,
        value: true
      },
      {
        id: 5,
        name: FEATURES.upskill,
        value: true
      },
      {
        id: 6,
        name: FEATURES.digitalManager,
        value: true
      },
      {
        id: 7,
        name: FEATURES.promotional,
        value: true
      },
      {
        id: 8,
        name: FEATURES.crisis,
        value: true
      },
      {
        id: 9,
        name: FEATURES.technicalSupport,
        value: true
      },
      {
        id: 10,
        name: FEATURES.digitalEmployee,
        value: true
      },
      {
        id: 11,
        name: FEATURES.digitalWellbeing,
        value: true
      },
      {
        id: 12,
        name: FEATURES.monthlyWellbeing,
        value: true
      },
      {
        id: 13,
        name: FEATURES.criticalIncidentOnSite,
        value: true
      },
      {
        id: 14,
        name: FEATURES.face2face,
        value: true
      },
      {
        id: 15,
        name: FEATURES.legalSupport,
        value: true
      }
    ]
  }
]
