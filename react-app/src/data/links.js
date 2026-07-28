// Clinton County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-28
//
// Every URL below was fetched and confirmed to resolve on the review date.
//
// SECURITY NOTE — do not "fix" the Auditor link:
//   clintoncountyauditor.org  is the real office.
//   clintoncountyauditors.org (with an extra "s") is NOT. The Auditor publishes
//   a fraud warning about it on his own homepage, and the site itself admits it
//   is "an independent resource ... not affiliated with any government office."
//   Never link it, and never fetch data from it.
//
// Four villages have no official website at all — Martinsville, Midland,
// Clarksville and Port William. Port William has only a Facebook page. They are
// deliberately absent rather than linked to something unofficial.
//
// Lynchburg is included but is seated in Highland County; only part of its
// corporate limits fall inside Clinton.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Clinton County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Clinton County, Ohio", category: "Government", subcategory: "County", url: "https://co.clinton.oh.us/", description: "Official Clinton County government site; the Commissioners sit at 1850 Davids Drive, Suite 208, Wilmington." },
  { name: "Clinton County Auditor", category: "Government", subcategory: "Auditor", url: "https://clintoncountyauditor.org/", description: "Property records, real estate tax and parcel search for Clinton County, at 1850 Davids Drive Suite 303 in Wilmington." },
  { name: "Clinton County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/clinton/", description: "County elections office at 111 S. Nelson Ave. in Wilmington, open weekdays 8:30 am to 4:00 pm." },
  { name: "Clinton County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://clintonsheriff.com/", description: "Sheriff's patrol, jail, dispatch and concealed-carry permits for Clinton County." },
  { name: "Clinton County Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://www.clintoncountycommonpleascourt.com/", description: "General and Domestic Relations divisions at 46 S. South Street in Wilmington." },
  { name: "Clinton County Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.clintonmunicourt.org/", description: "Traffic, criminal, civil and small-claims court at 69 North South St. in Wilmington." },
  { name: "Clinton County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://www.clintoncountycourts.org/ClerkOfCourts/home/", description: "Keeper of Common Pleas and 12th District appellate records, and a U.S. passport agent." },
  { name: "Clinton County Probate & Juvenile Court", category: "Government", subcategory: "Courts", url: "https://co.clinton.oh.us/departments/Courts/juvenilecourt", description: "Probate and juvenile division at 46 S. South Street, Suite 218 in Wilmington." },
  { name: "Clinton County Engineer", category: "Government", subcategory: "County", url: "https://www.clintoncountyengineer.org/", description: "County roads, bridges, tax mapping and subdivision review, at 1326 Fife Avenue in Wilmington." },
  { name: "Clinton County Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://clintoncountyrpc.org/", description: "Land use, zoning and land bank agency at 1850 Davids Drive, Suite 116 in Wilmington." },
  { name: "Clinton County GIS", category: "Government", subcategory: "GIS", url: "https://clinton-county-ohio-clintoncountygis.hub.arcgis.com/", description: "County GIS hub publishing parcel shapefiles, aerial photography, LiDAR and interactive map viewers." },
  { name: "City of Wilmington", category: "Government", subcategory: "City", url: "https://wilmingtonohio.gov/", description: "Municipal government of the county seat, at the Municipal Building, 69 N. South Street." },
  { name: "Village of Blanchester", category: "Government", subcategory: "Village", url: "https://www.blanvillage.com/", description: "Village offices at 318 E. Main St., covering police, streets, parks, zoning and public affairs." },
  { name: "Village of Sabina", category: "Government", subcategory: "Village", url: "https://www.villageofsabina.gov/", description: "Village government for Sabina in eastern Clinton County, which bills itself “The Eden of Ohio.”" },
  { name: "Village of New Vienna", category: "Government", subcategory: "Village", url: "https://newvienna.webnode.page/", description: "Official site for the village of New Vienna in the county's southeast corner." },
  { name: "Village of Lynchburg", category: "Government", subcategory: "Village", url: "https://www.lynchburgohio.org/", description: "Village established in 1830 and seated in Highland County, with corporate limits extending into Clinton." },
  // ---------- Education ----------
  { name: "Wilmington Public Library of Clinton County", category: "Education", subcategory: "Library", url: "https://www.wilmington.lib.oh.us/", description: "County library system running the Main Library in Wilmington and a Clinton-Massie branch." },
  { name: "Sabina Public Library", category: "Education", subcategory: "Library", url: "https://www.sabinalibrary.com/", description: "Independent public library at 11 E. Elm St. in Sabina." },
  { name: "Blanchester Public Library", category: "Education", subcategory: "Library", url: "https://www.blanchester.lib.oh.us/", description: "Public library serving Blanchester and the county's western townships." },
  { name: "Wilmington City Schools", category: "Education", subcategory: "K-12", url: "https://www.wilmingtoncityschools.com/", description: "Clinton County's largest district, serving the city of Wilmington." },
  { name: "Blanchester Local Schools", category: "Education", subcategory: "K-12", url: "https://www.blanschools.org/", description: "Home of the Wildcats, running Blanchester High School, the middle school and Putman Elementary." },
  { name: "East Clinton Local Schools", category: "Education", subcategory: "K-12", url: "https://www.east-clinton.k12.oh.us/", description: "“Home of the Astros,” serving the Sabina and New Vienna area." },
  { name: "Clinton-Massie Local Schools", category: "Education", subcategory: "K-12", url: "https://www.clinton-massie.k12.oh.us/", description: "District headquartered at 2556 Lebanon Rd. in Clarksville, serving the county's west." },
  { name: "Laurel Oaks Career Campus", category: "Education", subcategory: "Career-Tech", url: "https://hs.greatoaks.com/laurel", description: "Great Oaks career campus at 300 Oak Drive in Wilmington, offering 19 programs from welding to dental assisting." },
  { name: "Wilmington College", category: "Education", subcategory: "Higher Ed", url: "https://www.wilmington.edu/", description: "Private Quaker liberal arts college in Wilmington, home of the Quakers." },
  { name: "Southern State Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.sscc.edu/", description: "Regional public two-year college serving Clinton and the surrounding counties." },
  // ---------- Health ----------
  { name: "Clinton County Health District", category: "Health", subcategory: "Public Health", url: "https://co.clinton.oh.us/departments/HealthDistrict", description: "Nationally accredited county health department at 111 South Nelson Ave., Suite 1 in Wilmington." },
  { name: "TriHealth Clinton Regional Hospital", category: "Health", subcategory: "Hospital", url: "https://www.trihealth.com/locations/clinton-regional-hospital", description: "140-bed hospital at 610 West Main Street in Wilmington, established in 1951 as Clinton Memorial." },
  { name: "Mental Health Recovery Board of Warren & Clinton Counties", category: "Health", subcategory: "Behavioral Health", url: "https://www.mhrbwcc.org/", description: "Clinton County's ADAMH board, funding behavioral health services and a 24-hour crisis line." },
  // ---------- Business & Economy ----------
  { name: "Wilmington-Clinton County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.wccchamber.com/", description: "County chamber of commerce, founded more than sixty years ago and host of Taste of Clinton County." },
  { name: "Clinton County Port Authority", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.chooseclintoncountyoh.org/", description: "County economic development agency marketing sites, incentives and workforce from 1113 Airport Road." },
  { name: "Wilmington Air Park", category: "Business & Economy", subcategory: "Logistics", url: "https://www.wilmingtonairpark.com/", description: "1,900-acre air cargo and logistics park run by the Port Authority, with runways of 9,000 and 10,701 feet." },
  // ---------- Community & Social ----------
  { name: "Clinton County Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://co.clinton.oh.us/departments/jobandfamilyservices", description: "County agency at 1025 S. South Street in Wilmington handling family services, child protection and child support." },
  { name: "OhioMeansJobs Clinton County", category: "Community & Social", subcategory: "Workforce", url: "https://co.clinton.oh.us/OhioMeansJobs", description: "Workforce center at 1025 S. South St., Suite 500, offering on-the-job training and veteran priority services." },
  { name: "OSU Extension – Clinton County", category: "Community & Social", subcategory: "Extension", url: "https://clinton.osu.edu/", description: "Ohio State Extension office covering 4-H, agriculture and Farm Science Review, open Monday to Thursday." },
  { name: "Clinton County History Center", category: "Community & Social", subcategory: "History", url: "https://clintoncountyhistory.org/", description: "Historical society chartered in 1948, housed in Rombach Place at 149 E. Locust St. in Wilmington." },
  { name: "Clinton County Community Action Program", category: "Community & Social", subcategory: "Community Action", url: "https://clintoncap.org/", description: "Nonprofit operating since 1965 at 789 North Nelson Avenue, running Head Start, energy assistance and a senior center." },
  // ---------- Recreation & Tourism ----------
  { name: "Clinton County Convention & Visitors Bureau", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://clintoncountyohio.com/", description: "County tourism bureau at 58 W. Sugartree Street in downtown Wilmington." },
  { name: "Clinton County Agricultural Society", category: "Recreation & Tourism", subcategory: "Fair", url: "https://clintoncountyfairgrounds.com/", description: "Runs the Clinton County Fair and year-round events at the fairgrounds on W. Main Street in Wilmington." },
  { name: "Cowan Lake State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/cowan-lake-state-park", description: "1,775-acre Clinton County park around a 700-acre lake, with a 1,000-foot beach and an 18-hole disc golf course." },
  { name: "Caesar Creek State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/caesar-creek-state-park", description: "3,741-acre park opened in 1978 around Ohio's deepest lake, spanning Warren, Clinton and Greene counties." },
  { name: "Wilmington Parks & Recreation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.wilmingtonparks.org/", description: "City park system of seven parks, with its office at 1100 Rombach Ave. in Wilmington." },
  // ---------- News & Media ----------
  { name: "Wilmington News Journal", category: "News & Media", subcategory: "Newspaper", url: "https://www.wnewsj.com/", description: "Daily newspaper covering Wilmington, Blanchester and Clinton County." },
  { name: "WALH Radio", category: "News & Media", subcategory: "Radio", url: "https://walhradio.com/", description: "Streaming station billing itself “The Voice of Wilmington and Clinton County,” playing classic rock." },
];
