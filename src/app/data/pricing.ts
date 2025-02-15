export interface Course {
    id: number;
    title: string;
    proficiency: string;
    duration: string;
    description: string;
    highlights: string[];
    price: string;
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: "Advanced Hijama Course",
      proficiency: "Course Level 2",
      duration: "4 Weekends Over 4 Months",
      description:
        "An in-depth Level 2 course designed for advanced practitioners, covering complex techniques and applications.",
      highlights: [
        "A to Z About Hijama",
        "Extensive Introduction To Hijama According To Islam (Sunnah)",
        "Advanced Physiology & Anatomy",
        "Medical Concerns for Hijama",
        "Hijama SOP (Standard Operating Procedure)",
        "Safety & Hygiene Protocols",
        "Hands-on Training & Case Studies",
      ],
      price: "₹10,000",
    },
    {
      id: 2,
      title: "Advanced Hijama Course",
      proficiency: "Course Level 2",
      duration: "4 Weekends Over 4 Months",
      description:
        "An in-depth Level 2 course designed for advanced practitioners, covering complex techniques and applications.",
      highlights: [
        "A to Z About Hijama",
        "Extensive Introduction To Hijama According To Islam (Sunnah)",
        "Advanced Physiology & Anatomy",
        "Medical Concerns for Hijama",
        "Hijama SOP (Standard Operating Procedure)",
        "Safety & Hygiene Protocols",
        "Hands-on Training & Case Studies",
      ],
      price: "₹16,000",
    },
    {
      id: 3,
      title: "Advanced Hijama Course",
      proficiency: "Course Level 2",
      duration: "4 Weekends Over 4 Months",
      description:
        "An in-depth Level 2 course designed for advanced practitioners, covering complex techniques and applications.",
      highlights: [
        "A to Z About Hijama",
        "Extensive Introduction To Hijama According To Islam (Sunnah)",
        "Advanced Physiology & Anatomy",
        "Medical Concerns for Hijama",
        "Hijama SOP (Standard Operating Procedure)",
        "Safety & Hygiene Protocols",
        "Hands-on Training & Case Studies",
      ],
      price: "₹11,000",
    },
  ];
  