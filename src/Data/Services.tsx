import { AdminPanelSettingsOutlined, BiotechOutlined, ContentPasteSearchOutlined, DevicesOtherOutlined, FingerprintOutlined, GavelOutlined, GradingOutlined, MinorCrashOutlined, NotStartedOutlined } from "@mui/icons-material";
import { Services } from "../Interfaces/Services";
import doc from '../Assets/Home/document-examiner.jpg'
import finger from '../Assets/Home/Forensic-Fingerprint-Analysis.jpg'
import crime from '../Assets/Home/crime.jpeg'
import legalAdvice from '../Assets/Home/legalAdvice.jpg'
import document from '../Assets/images/Blogging-pana.png'
import medico from '../Assets/images/Blood test-pana.png'
import cyber from '../Assets/images/Cross-platform software-pana.png'
import detective from '../Assets/images/Hacker-pana.png'
import legal from '../Assets/images/Social interaction-pana.png'
import fingerPrint from '../Assets/images/fingerprint.png'
import insurance from '../Assets/images/insurance.png'
import audiovideo from '../Assets/images/audiovideo.png'
import crimeScene from '../Assets/images/Interview-pana.png'


const services : Services[] = [
    {
        id : "1",
        title : "Questioned Document Examination",
        para : "We provide complete solution for Forensic handwriting examination related matters.",
        discription: "We provide complete solution for Forensic handwriting examination related matters. Our forensic handwriting experts are specialized in examination of questioned documents, handwriting matching, detecting forgery in property documents, cheques, will forgery, financial documents, signature forgery, suicidal notes, bank forgery, and other important documents.",
        icon : <ContentPasteSearchOutlined sx={{ fontSize:"30px"}}/>,
        image : doc,
        points : [
            "Handwriting Examination",
            "Signature Verification",
            "Document Authentication Analysis",
            "Certificate Verification",
            "Photograph Verification"
        ],
        vector: document
    },
    {
        id : "2",
        title : "Fingerprint Analysis",
        para : "We provide complete solutions in fingerprint examination related matters.",
        discription: "We provide complete solutions in fingerprint examination matters. Our Fingerprint examination experts visit scene of crime to develop, lift and compare the fingerprints. We also examine the fingerprints from different documents such as Wills, Cheques, Agreement forms, Government registries etc.",
        icon : <FingerprintOutlined sx={{ fontSize:"30px"}}/>,
        image : finger,
        points : [
            "Comparison of Fingerprints",
            "Forensic Photography of the Fingerprints",
            "Development and Lifting of Fingerprintsfrom the Scene of Crime",
            "Recording of Fingerprints for Verification Purposes",
            "Examination of Fingerprints On Questioned Documents"
        ],
        vector : fingerPrint
    },
    {
        id : "3",
        title : "Crime Scene Investigation",
        para : "Our Forensic experts solve and investigate cases related to the crime scene.",
        discription: "Our Forensic experts solve and investigate cases related to the crime scene. We use scientific approach while doing investigation at the crime scene. We do reconstruction of the crime scene and help the people to acquire Truth. Our Forensic team has a wide experience of more than 5 years in different crime scenes.",
        icon : <GavelOutlined sx={{ fontSize:"30px"}}/>,
        image : crime,
        points : [
            "Accidental Cases",
            "Firing Cases",
            "Fire & Arson Cases",
            "Hit & Run Cases",
            "Theft & Robbery Cases",
            "Crime Scene Reconstruction",
            "Murder Cases",
            "Suicidal Cases",
            "Burglary Cases"
        ],
        vector : crimeScene
    },
    {
        id : "4",
        title : "Legal Advice",
        para : "We have a best team of legal experts who provide legal assistance required by an individual/Organization.",
        discription: "We also provide legal advice in criminal and civil cases. We have a best team of legal experts who provide legal assistance required by an individual/Organization.",
        icon : <MinorCrashOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        points : [
            "Preparation of Questionnaire for Cross Examination in Fingerprint Cases.",
            "Preparation of Questionnaire for Cross Examination in Handwriting & Documents Cases.",
            "Legal Advice in Civil Cases.",
            "Legal Advice in Criminal Cases.",
            "Legal Advice in Cases containing Forgeries such as Fingerprint and Handwriting Forgeries.",
            "Legal Advice on Cyber-Crime Cases."
        ],
        vector : legal
    },
    {
        id : "5",
        title : "Audio - Video Forensics",
        para : "We provide complete solution of Audio and Video verification which can be obtained from a Criminal legal proceedings.",
        discription: "We provide complete solution of Audio and Video verification which can be obtained from a Civil investigation or Criminal legal proceedings. It generally involves the acquisition, analysis and examination of Audio and Video recordings. It helps in the investigation of crimes such as personal disputes, extortion, kidnapping, intimidation, stalking etc.",
        icon : <NotStartedOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        points : [
            "Audio Verification",
            "Video Verification",
            "CCTV footages",
            "Audio Enhancements",
            "Video Enhancements",
            "Speaker Identification"
        ],
        vector : audiovideo
    },
    {
        id : "6",
        title : "Medico-Legal Consultation",
        para : "We provide complete solution of Medico-Legal Consultation assistance required by an individual/Organization.",
        discription: "Medico-Legal reports are written by medical professionals who have been chosen as an expert witness in a legal case. We provide Medico-Legal onsultation and Expert Opinion in Cases of Hanging, Drowning, Burning, Poisoning, Sexual Assault cases.",
        icon : <BiotechOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        vector : medico
    },
    {
        id : "7",
        title : "Cyber Forensics",
        para : "We provide complete solution for Cyber crime related matters.",
        discription: "In the field of forensic science it is the process to acquire digital evidence, analyse the evidence and report by examining digital storage media such as hard disks, pen drives etc. or network. It is the process to recover Data from Digital Evidences (Mobile Phone, Smart Phones, SIM cards, Memory cards) under forensically sound conditions.",
        icon : <DevicesOtherOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        points : [
            "Computer Forensics is also known as Digital Forensic",
            "From Mobile Phone; deleted SMSs, contact details, Call History, Images, Audios, Videos etc. can be extracted.",
        ],
        vector : cyber
    },
    {
        id : "8",
        title : "Detective Service",
        para : "We provide complete solution for Detective Service.",
        discription: "We offer all kind of Personal and Corporate detective services to solve your problems. We keep surveillance on a person or on a group.",
        icon : <AdminPanelSettingsOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        points : [
            "Pre Matrimonial Investigation",
            "Post Matrimonial Investigation",
            "Monitoring On Teenagers",
            "Monitoring On Employees"
        ],
        vector : detective
    },
    {
        id : "9",
        title : "Insurance Claim Investigation",
        para : "We provide complete Insurance Claim Investigation solutions.",
        discription: "Our investigators are capable of detecting these fraudulent claims and thereby help the clients in preventing such losses. We provide best solution to check these fake claims.",
        icon : <GradingOutlined sx={{ fontSize:"30px"}}/>,
        image : legalAdvice,
        points : [
            "Insurance Fraudulent Claims Investigations",
            "Accidental Benefits/Vehicle Crash Claims",
            "Life Insurance Claim Investigations",
            "Mediclaim Investigations",
            "Death Certificate Verifications"
        ],
        vector : insurance
    },
]

export default services