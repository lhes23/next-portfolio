export interface AppContextInterface extends IJobExperiences, IPortfolios {
  id: { $oid: string }
  personalDetails: IUser
  education: {
    degree: string
    course: string
    year: string
    school: string
    schoolAddress: string
  }
  professionalDetails: {
    mainTitles: string
    summary: string
    jobTitles: string[]
    website: string
    skills: ISkill[]
  }
  socialMedias: { title: string; url: string }[]
}

export interface IJobExperience {
  title: string
  date: string
  company: string
  tasks: string[]
}

export interface IJobExperiences {
  jobExperiences: IJobExperience[]
}

export interface IPortfolio {
  id: string
  name: string
  url: string
  img: string
  app: string
  tech: string[]
  description: string
  createdAt: string
}

export interface IPortfolios {
  portfolios: IPortfolio[]
}

// New Interface from DB
export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  bday: string
  address: string
  phoneNumber: string
  about: string
  mainTitle: string
  summary: string
  website: string
  schoolDegree: string
  schoolCourse: string
  schoolName: string
  schoolYear: string
  schoolAddress: string
}

export interface ISkill {
  id: string
  name: string
}

export interface IJobTitle {
  id: string
  name: string
}
