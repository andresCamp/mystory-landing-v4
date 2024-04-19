'use server'
import { z } from 'zod';

export async function waitlistSignUp(prevState: any, formData: FormData) {
  const schema = z.object({
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    why_join_our_waitlist_: z.string().min(1)
  });

  const parse = schema.safeParse({
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    why_join_our_waitlist_: formData.get('why_join_our_waitlist_')
  });

  if (!parse.success) {
      return 'Please fill in all fields correctly.';
  }

  const { firstname, lastname, email, why_join_our_waitlist_ } = parse.data;
  const base_url = "https://api.hsforms.com/submissions/v3/integration/submit";
  const portal_id = "45901333";  // Adapted portal ID
  const form_id = "54f72923-6e0a-477e-aa2b-56d6c3e42e91";  // Adapted form ID
  const request_url = `${base_url}/${portal_id}/${form_id}`;

  const body = {
    "submittedAt": Date.now(),
    "fields": [
      { "objectTypeId": "0-1", "name": "firstname", "value": firstname },
      { "objectTypeId": "0-1", "name": "lastname", "value": lastname },
      { "objectTypeId": "0-1", "name": "email", "value": email },
      { "objectTypeId": "0-1", "name": "why_join_our_waitlist_", "value": why_join_our_waitlist_ }
    ]
  };

  try {
    const response = await fetch(request_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      return "true";
    } else {
      console.error("Failed to submit form to HubSpot");
      return "There was a problem with your sign-up. Please try again.";
    }
  } catch (error) {
    console.error("Error submitting form to HubSpot:", error);
    return "An error occurred while submitting the form. Please check your connection and try again.";
  }
}




export async function waitlistShare(prevState: any, formData: FormData) {
    const schema = z.object({
        email: z.string().email(),
        waitlist_referrer_first_name: z.string().min(1),
        waitlist_referrer_last_name: z.string().min(1)
    });

    const parse = schema.safeParse({
        email: formData.get('email'),
        waitlist_referrer_first_name: formData.get('waitlist_referrer_first_name'),
        waitlist_referrer_last_name: formData.get('waitlist_referrer_last_name')
    });

    if (!parse.success) {
        return 'Please fill in all fields correctly.';
    }

    const { email, waitlist_referrer_first_name, waitlist_referrer_last_name } = parse.data;
    const base_url = "https://api.hsforms.com/submissions/v3/integration/submit";
    const portal_id = "45901333";  // Adapted portal ID
    const form_id = "455bba2f-2141-4a96-b4bf-186e9e63bf85";  // Adapted form ID
    const request_url = `${base_url}/${portal_id}/${form_id}`;

    const body = {
        "submittedAt": Date.now(),
        "fields": [
        { "objectTypeId": "0-1", "name": "email", "value": email },
        { "objectTypeId": "0-1", "name": "waitlist_referrer_first_name", "value": waitlist_referrer_first_name },
        { "objectTypeId": "0-1", "name": "waitlist_referrer_last_name", "value": waitlist_referrer_last_name }
        ]
    };

    try {
        const response = await fetch(request_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });

        if (response.ok) {
        return "true";
        } else {
        console.error("Failed to submit form to HubSpot");
        return "There was a problem with your sign-up. Please try again.";
        }
    } catch (error) {
        console.error("Error submitting form to HubSpot:", error);
        return "An error occurred while submitting the form. Please check your connection and try again.";
    }
}