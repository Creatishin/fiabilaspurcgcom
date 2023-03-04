
import { ref, child, push, onValue, update } from "firebase/database";
import blogInterface from "../../Interfaces/Blog";
import enquiryInterface from "../../Interfaces/Enquiry";
import Testimonials from "../../Interfaces/Testimonials";
import { database } from "./FirebaseConfig";

export function writeBlog({author, body, title, starCount, image} : blogInterface) {
    // Get a key for a new Post.
    const uid = push(child(ref(database), 'blogs')).key;
    // A post entry.
    const postData = {
        author, body, title, starCount, image, uid
    };
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates : any = {};
    updates['/blogs/' + uid] = postData;
    return update(ref(database), updates);
}

export async function readBlogs(uid?:string) {
    const read = ref(database, `blogs/${uid??""}`);
    let data;
    onValue(read, (snapshot) => {
      data = snapshot.val();
    });
    return data;
}

export function postEnquiry({name, email, contact, website, service, message} : enquiryInterface) {
    // Get a key for a new Post.
    const uid = push(child(ref(database), 'enquiry')).key;
    // A post entry.
    const postData = {
        name, email, contact, website, service, message, uid
    };
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates : any = {};
    updates['/enquiry/' + uid] = postData;
    return update(ref(database), updates);
}

export function readEnquiry(uid?:string) {
    const read = ref(database, `enquiry/${uid??""}`);
    let data;
    onValue(read, (snapshot) => {
      data = snapshot.val();
    });
    return data;
}

export function postTestimonial({name, title, company, position, para} : Testimonials) {
    // Get a key for a new Post.
    const uid = push(child(ref(database), 'testimonial')).key;
    // A post entry.
    const postData = {
        name, title, company, position, para, uid
    };
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates : any = {};
    updates['/testimonial/' + uid] = postData;
    return update(ref(database), updates);
}

export function readTestimonial(uid?:string) {
    const read = ref(database, `testimonial/${uid??""}`);
    let data;
    onValue(read, (snapshot) => {
      data = snapshot.val();
    });
    return data;
}

export function postMentor({name, title, company, position, para} : Testimonials) {
    // Get a key for a new Post.
    const uid = push(child(ref(database), 'mentor')).key;
    // A post entry.
    const postData = {
        name, title, company, position, para, uid
    };
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates : any = {};
    updates['/mentor/' + uid] = postData;
    return update(ref(database), updates);
}

export function readMentor(uid?:string) {
    const read = ref(database, `mentor/${uid??""}`);
    let data;
    onValue(read, (snapshot) => {
      data = snapshot.val();
    });
    return data;
}