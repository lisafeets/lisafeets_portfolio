---
title: 'Predictive Send Time Optimization'
excerpt: 'An AI model that predicts the optimal time to send a marketing message. Marketing teams use this technology to personalize the messaging experince for their consumers to drive brand loyalty and conversions.'
coverImage: '/assets/blog/journeys/optimize-send.svg'
date: '2022-06-07T05:35:07.322Z'
author:
  name: Lisa Orr
  picture: '/assets/blog/authors/lisa.png'
ogImage:
  url: /assets/blog/sendtime/sendtime-optimize.png
---

## Product

An AI model that predicts the optimal time to send a marketing message. Marketing teams use this technology to personalize the messaging experince for their consumers to drive brand loyalty and conversions.
 
![Send Time Optimization UI](/assets/blog/sendtime/sendtimecover.png)

 ---

## My Role

* **Model Development, Experimentation, and Integration** Led the ideation and creation of the supporting machine learning model including customer experimentation (a/b testing models) and integration of the model's output with backend systems.
* **Customer discovery Lead** Recruited customers for discovery sessions to evaluate business viability and usability risks to ensure we built a ML solution that would drive value for the marketer and a great experience for their end user.
* **Solution Champion** Worked with marketing to build out supporting launch materials including blog posts and webinars. Toured with the Airship team for the Elevate roadshow to present the solution on stage in NYC, Atlanta, Santa Monica, SF, and Toronto. 

---

## Execution

Predicting the best time to send started out as a hack week project. The project gained internal support and interest across Airship teams from sales ("I can sell that tomorrow!") to customer success ("customers want more recommendations!").

With backing from stakeholders, I began building the predictive send time solution. The development occurred in three phases: Customer Discovery, Model Design, and Productization of the solution.  

### Customer discovery 
We spoke with several customers about how they decide when the best time to send a message might be. All of the customers we spoke with expressed interest in a Best Time model for the opportunity to save themselves time and potentially increase the direct open rate of the messages being sent.

### Model design

We took several different approaches in developing this model and our concept of what problem we were solving for evolved over time. Our goal with model exploration was to predict when a user will open an app by learning over their previous opening behavioural patterns.

### Productizing the Send Time solution

With the send time optimization model created and ready to emit user-level predictions the next step of was feeding those predictions into the Airship backend system. We instrumented the model to seemlessly integrate send time predictions into both the Airship messaging pipeline ("send to user's best hour") as well as Airship's data product line ("show me a distribution of users "best hours"). 

---

## Challenges & Achievements

### Challenges
* **Translating local time to global time** As airship customers exist across the world, I worked with engineering to ensure that global timezones translations worked with backend system requirements. 
* **Don't just tell me, show me!** To overcome the natural skepticism marketers have when it comes to AI, we created dashboards showcasing user behaviour crossed with the model's predictions. 
* **Scaling the model with customer usage** As we onboarded more customers, we ran into scaling issues with processing predictions for a growing number of users. We overcame this barrier by only submitting updates for predictions that had changed.

### Achievements
* **Model improves user open rates when used for marketing campaigns** Through A/B tests with marketing teams, we demonstrated that the send time optimization model improved user open rates by up to 14%. 
* **Quick adoption and buy in by media and retail customers** Marketing teams went all in with the send time optimization solution sending 100% of their marketing messages via automated predictions within 3 months of launch. 
* **Unexpected benefit: Audience traffic optimization** Since predictions are individualized to the user's behaviour, the model will naturally spread out messaging across hours of the day. This turned out to be a major benefit for large retail apps.
