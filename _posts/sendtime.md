---
title: 'Predictive Send Time Optimization'
excerpt: 'A model that predicts the best time to send marketing messages to end users'
coverImage: '/assets/blog/journeys/optimize-send.svg'
date: '2022-06-07T05:35:07.322Z'
author:
  name: Lisa Orr
  picture: '/assets/blog/authors/lisa.png'
ogImage:
  url: /assets/blog/sendtime/sendtime-optimize.png
---

## Product

Predicting the best time to send a marketing message to end users to drive higher open rates.
 
![Send Time Optimization UI](/assets/blog/sendtime/sendtimecover.png)

 ---

## My Role

* **Model Development, Experimentation, and Integration** Led the ideation and creation of the supporting machine learning model including customer experimentation (a/b testing models) and integration of the model's output with backend systems.
* **Customer discovery Lead** Recruited customers for discovery sessions to evaluate business viability and usability risks to ensure we built a ML solution that would drive value for the marketer and a great experience for their end user
* **Solution Champion** Worked with marketing to build out supporting launch materials including blog posts and webinars. Toured with the Airship team for the Elevate roadshow to present the solution on stage in NYC, Atlanta, Santa Monica, SF, and Toronto. 

---

## Execution

Predicting the best time to send started out as a hack week project. We spent the week investigating features and testing different models and ultimately ran an MVP on internal test user data. The project gained internal support and interest across Airship teams including sales ("I can sell that tomrrow!") to customer success ("customers want more recommendations!").

With backing from stakeholders, I began building the predictive send time solution. The development occurred in three phases: Customer Discovery, Model Design, and Productization of the solution.  


### Customer discovery 
We talked with several customers about their timing strategies and how they decide when the best time to engage might be. There was a broad range in sophistication between customers and their send time strategies. Some marketers select a single send time for an entire campaign, some marketers selected individual times for users within their campaigns.

One customer quoted using their intuition for deciding the best time to send a campaign (e.g. a marketer of a dating app thought sending messages at 6pm local time would be the best). One of our most sophisticated customers, a telecom company, selected best time for each individual based on a few rules: send to last time a user opened, if that time was outside day hours the send to next day hour.

All of the customers we spoke with expressed interest in a Best Time model (even the very sophisticated telecom company) for the opportunity to save themselves time and potentially increase the direct open rate of the messages being sent.


### Model design


We took several different approaches in developing this model and our concept of what problem we were solving for evolved over time. Ultimately we are shipping a model that is personalized to the user, is extensible to dormant audience members, and is both actionable in campaigns and explorable in the Airship data product line. 

The main ingrediants to the model were distribution of opens aggregated at the user level and across users across the hours of the day and days of the week. We performed both live customer experiments and validated the model against historical data. Our goal with these models was to predict when a user will open an app by learning over their previous opening behavioural patterns.

Based on customer (and internal stakeholder) feedback, we included a "daytime bias" vector to ensure that the likelyhood of sending a daytime push was higher than sending an evening push. Although the models were learning from user behaviour directly and could therefore theoretically optimize for nighttime pushes for true night owls, this behaviour was deemed risky and could potentially be deleterious to a brand's image. We therefore introduced a "daytime bias" to reduce this risk.


### Productizing the Send Time solution

With the send time optimization model created and ready to emit user-level predictions the next step of was feeding those predictions into the Airship backend system. We used the Airship tagging system to decorate users with their "best hour". The model was run daily after which a user's "best hour" would be updated. Using tags allowed us to seemlessly integrate send time predictions into both the Airship messaging pipeline ("send to user's best hour") as well as Airship's data product line ("show me a distribution of users "best hours"). 

Once the model was live in production, we launched the new predictive solution as the Predictive Send Time Optimization solution in Fall of 2018. I worked with product marketing to create education pieces on machine learning, the new model, and use cases customer could get started with asap. 

---

## Challenges & Achievements

### Challenges
* **Translating local time to global time** A user's best time is predicted against their patterns of sends and opens over the course of the day. To instrument the model output we needed to translate the user's best local hour into a global offset. I worked with engineering to determine the formula for making this translation compensating for global timezones and backend system requirements. 
* **Don't just tell me, show me!** Marketers were both excited and skeptical when it comes to letting a model decide the best time to send messages to their users. To overcome their hesitancy we created dashboards showcasing user behaviour crossed with the model's predicitons. We also ran a/b tests on behalf of customers to demonstrate the power of predictive AI in improving open rates. 
* **Scaling the model with customer usage** As we onboarded more customers, the number of tag changes increased and the overall data processing job slowed down. In order to update tags in a timely fashion (e.g. daily) we needed a way to process tags faster. We accomplished this by first doing a diff between previous and current model outputs to ensure only new new tag changes were submitted as tag update requests. 

### Achievements
* **Model improves user open rates when used for marketing campaigns** Through A/B tests with marketing teams, we demonstrated that the send time optimization model improved user open rates by 14%. These A/B tests helped with improving marketer confidence in the model as well as Airship's positioning as a leader in predictive analytics. 
* **Quick adoption and buy in by media and retail customers** Once the model was live, we worked with keystone media and retail customers to get them up and running with automating send time prediction. Marketing teams went all in with the send time optimization solution sending 100% of their marketing messages via automated predicitons within 3 months of launch. 
* **Unexpected benefit: Audience traffic optimization** Since predictions are individualized the user's behaviour, the model will naturally spread out messaging across hours of the day. This has the side benefit of distributing app traffic patterns across time. One of Airship's marquee retail customers was thrilled with this change in user flow and even shared interal traffic dashboards with their Airship customer manager to celebrate the positive impact from using Send time optimizaiton. 
