import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY ||
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWFhOWRhNjcxMmMzNjc5N2M2ZGUyOTI2NWMxMjMxZDE4NDg3ZmNmZGY0YzE3NDlkYjQzMzA0MWJkMmQzMWQ2NjIyNzk5MDYwYWFkNTIzYzYiLCJpYXQiOjE3Njk3NTc0MjkuNjQ0NzE0LCJuYmYiOjE3Njk3NTc0MjkuNjQ0NzE4LCJleHAiOjQ5MjU0MzEwMjkuNjM1NTk1LCJzdWIiOiIyMDkzNTEwIiwic2NvcGVzIjpbXX0.lbZMvpvrudJRYgKGxp84LXJi6tcQ5wHZ45FfKP1R0pK4evEuYxAP5EI1Fg1F_kzPMFerZZc0ZOGjf4TRjI32Zp5VLFOfDeLvlV9_UnCj-7bWe9aUTVA_HyTCg9KFsZCI5XVb-TO7zFnXcG7deiIGk6FHnaOoxZIKJM4NlFJu1pipD6WHLm7OL4jhlAVCwFomsSfy135xbz8A3wA-SYp0io1zVkUt74wjTmtJ5M0cI9wH2ZBKaXsb0NzQl7p9cC6RxGX6IcwcbPkAnTtE82e23169B93YblO3q3WL7Uc4E0Xl3pFFCZXq_Bq8TT0Fg_Bk-I-gTKirMzJ_lhJBPPvz1Zir3T1_kA0OeL5eElM9xkjpjAqCtidhP8jhlyOzqm_Yuu49KBk3fSbuSbiWX1euLy9ye5CAILnP4znY0j0oCqAzhDOE-AfgRLuadGNdbsdMNoZCqS2iooLxEQuZQeuK86Ew_rPNGC4j6rDU4LQwnYj7LRa7NkVVM2VS34ia8QPsxsYEbn2XlK9boyFgLv57hb1t3RjddNEZzwT79Z4petgY72VsXdIPvF2OVI6u8wtvU26t5r8j9YLrAuDIvBAs2USqbk604s_7Nn0uq-UT_ylyiYTQ7sIj9X1cESSf4d3wnerd2bepdijIzDakoPB7ko2WaTcmom_-3NVLu-P6V1o";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Directly call MailerLite API
    const mailerliteResponse = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        fields: {
          subscribed_at: new Date().toISOString()
        }
      }),
    });

    if (!mailerliteResponse.ok) {
      const errorData = await mailerliteResponse.json();
      console.error('MailerLite API error:', errorData);

      if (mailerliteResponse.status === 409) {
        // Subscriber already exists
        return NextResponse.json({
          message: 'You are already subscribed to our newsletter!'
        });
      }

      return NextResponse.json(
        { message: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    const subscriberData = await mailerliteResponse.json();

    return NextResponse.json({
      message: 'Subscription successful! Please check your email to verify your subscription.',
      subscriberId: subscriberData.id
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Server error during subscription' },
      { status: 500 }
    );
  }
}