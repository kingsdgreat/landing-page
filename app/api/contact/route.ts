import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { location, name, email, phone, message, source } = body

    // Validate required fields
    if (!name || !email || !phone || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email to your team
    const teamEmailResult = await resend.emails.send({
      from: 'contact@yourdomain.com', // Replace with your verified domain
      to: ['offers@sundiallands.com'], // Your team email
      subject: `New Property Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5DC9; border-bottom: 2px solid #1A5DC9; padding-bottom: 10px;">
            New Property Inquiry
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location Interest:</strong> ${location}</p>
            <p><strong>Source:</strong> ${source || 'hero-section'}</p>
          </div>

          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p>${message || `Customer is interested in properties in ${location}`}</p>
          </div>

          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" 
               style="background-color: #1A5DC9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to Customer
            </a>
          </div>
        </div>
      `,
    })

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: 'contact@yourdomain.com', // Replace with your verified domain
      to: [email],
      subject: 'Thank you for your interest in our properties',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5DC9; border-bottom: 2px solid #1A5DC9; padding-bottom: 10px;">
            Thank You, ${name}!
          </h2>
          
          <p>Thank you for your interest in our land properties. We've received your inquiry and our team will get back to you within 24 hours.</p>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Inquiry Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location Interest:</strong> ${location}</p>
          </div>

          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
            <ul style="color: #555;">
              <li>Our sales team will review your inquiry</li>
              <li>We'll contact you within 24 hours</li>
              <li>We'll provide you with available properties in ${location}</li>
              <li>Schedule a property visit if interested</li>
            </ul>
          </div>

          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Need immediate assistance?</strong><br>
              Call us at: <a href="tel:+3234102500" style="color: #1A5DC9;">+32 341-02500</a>
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              <strong>Sundial Lands Team</strong>
            </p>
          </div>
        </div>
      `,
    })

    if (teamEmailResult.error || customerEmailResult.error) {
      console.error('Email sending failed:', {
        teamEmailError: teamEmailResult.error,
        customerEmailError: customerEmailResult.error
      })
      return NextResponse.json(
        { error: 'Failed to send emails' },
        { status: 500 }
      )
    }

    console.log('Emails sent successfully:', {
      teamEmailId: teamEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted and emails sent successfully',
        data: {
          id: Date.now(),
          location,
          name,
          email,
          phone,
          message: message || `Interest in properties in ${location}`,
          source: source || 'hero-section',
          timestamp: new Date().toISOString(),
          teamEmailId: teamEmailResult.data?.id,
          customerEmailId: customerEmailResult.data?.id
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 