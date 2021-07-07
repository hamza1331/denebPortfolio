import React from "react";
import "./stats.css";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
const text = `ThinkSolutionz has a clientele of complex projects ranging from Mobile app, WordPress solutions to video editing and animation.`;
const Stats = () => {
  return (
    <section className="achievement section_padding">
      <Container>
        <Row className="align-items-center">
          <Col className="col-lg-6 wow fadeInLeft">
           
            <SectionTitle
              title="Over 300+ Completed work &amp; Still Counting "
              description={text}
              className="text-left"
            />
            {/* <div class="deneb_content_box">
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus at orci non risus luctus
                commodo. Ut nibh tellus, faucibus nec gravida.
              </p>
              <p>
                Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis
                vel non ex. Quisque a finibus justo.
              </p>
            </div> */}
          </Col>
          <Col className="col-lg-6">
            <div className="achievement-wrapper">
              <div class="single_achievement wow fadeInUp">
                <div class="icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAEnUlEQVRYhe2YXWwUVRTHf3f2o1KwDS1VO9BqxWQlrR8gahAYQ9aUEHkgqWiDfEUxIUaFoGli9IVYgpIYE4wEQ0wk9AHigybyIA1bm9FKCo1KsOgmNsUUBmTbYttl+8F2rw9zl043M93dUvDFf7KZzD33nt+5e++cc2cEeUrohga8DbwFLAAuAvuBj6VlpvLx5c8XDnyiwGktAPap6458HImsHXRjJbBQ3c7BnqXwazK5pDJ+7deLc0rHkkIDpAoqrvp2Scv8YdpwoRs1wDk329513Wcbant69jVXVLz7TdVjHi6qpWWe9/KvTQUHHnJrDPplqm5xbwygbnFvLOiXXmt9z1TOhdCNWcB7wAoX+zygGuClpbEL4dC1XiHg6arBweryRCLdqfNyYWF7d1GRlBCJzp13rKPsAWU6C/zj4vdHYI8f+BzYNFWEAIsr4gOvLr9yxc1WXZ5IpIPpTwQCxzrK0iav5XgWqPQD9arhBpDI6BQACgF644Fg5+XCwmxB9sYDQcftdSCZ0aVQ+a0XQjekajwsLXOrs5fQjXXA19mAU2iVtMzWDJ9fAlsg+4azbgEMMDiVccokIy3ztNCNTcDSaYA7pGX+PG24CqAJaJoGPKuy/e23Vf/D85LQjfuEbiy5VXjeJVXoxhNABCgWurFJbcibkpFQEJgLFGEnlNlAUP20RQ3Jiuhlf/5woRuPAN8BxaqpWAEDwP3AfAXNSa5wVcO3AAfSz6oCt2AXG4CvgIMyEioBntx55O5lJ84FV5BRpoUgtf6p0cjuunhnTnDsA8PjwHqhG7XYOd8J/hbYmDrydwo7AQUPtc56c3hMlLg5+7TZ9+DuuvjOzHavDdeqrkVAswv4BWmZYyr4AoCqsvEzHr5kqDzpmum8Zv4O9kFgA5PX0AlGhKM3ZCTUD5T89mHfZ90x3xdDI8LndFQyW95YUDI+ljNcWua40I3N6naDup5wgh26AJQAVJWNj3hMxlWeu90RwO/Yj8sHLmCAvnyAOcHTAQCNWXy4/qW5aCbS673THTidDOcD9vg0anasTjTCUHHWQTMBF7ohgIPAtvEUnO4KDABHZxSu3sfKpWVeygAfALYB+H0k6peNnErbE2NCaz4XnJeSk335NeTqR8d6C/wyw+I980PAK0I3moCtQEqBtwNogtGG5683vv5c4q/0gEUNpe/39Plcj1sP68mT5z/q258rvEZdN2JvysE0GBh++ZmRXY3r45ecA/rjWqWHL2KD7jYv+BvASezstsHRPgysPbx94BdgOY4isrsuvvfoqbtWjqdEwOko4Jejr60a/j5nuLTMM6qgNDORXoeBtdIyW0QYZCT0B7AoPWbXmkTXrjWJLo/JuMrzOZeW2Q7UYr9rDQMvSstsSdtFOPon8BPQnw8wJ7gjgEpgvrTM45l2EY72iXC0DWgHBvKF53JuH8rWR4SjV4GrMhIqA6qAMjwmNjSiXc8Zno9EOBoDYjISKsAuyaXYRcmHvXSWdU27uUwzCncEMQr0qN9kmz5RCv7Tc7vzFbkL+4vB7dYK1AcmP9CGnTAWMvHV6U6oTQM2qwDupNqAzf8CMXqBR4dA/NUAAAAASUVORK5CYII="
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <h3>100+</h3>
                <p>Projects</p>
              </div>
              <div class="single_achievement wow fadeInUp" data-wow-delay=".1s">
                <div class="icon">
                  <img
                    src="data:image/png;base64,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"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <h3>100+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div class="single_achievement wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAYAAADWFImvAAAFjklEQVRYhcWXaWxUVRTHf3eYlqHtAEUg7SNlqtBSUjYRiGh4GEkENU1riKAGQoNEJVEwkUVWQ5VF9hg1IGExxkQ0Eg0J0YQP+hA3SlgMIbSUaVkeyNJSBgvd5vrhvoHb15npFAf8f5nM2eY/5557zrmC/wHCMD3AFOAlYKG0rVPiARMQQDGwAhimqUZ5HyCJSQ6BMS5VGKi/70SEYY53CIyPYbJe2tbp+0ZEGOYYoAyYGMfsOLAcIOk1IgxzmEOguAPTJmC0tK3jAEnLiDDMfIfAFFx/sE9G8630rq0t1dd8fk28LEIiKUSEYQZQNTAN6KLrMtNaGt986kLlmNxQfcmWwic0lQWs123vmYgwzGzgPWAmkKLr/L7WptfHXaxa+mxNNcCQslHjWsMikqUQMEPaVvg/ERGG2RtYArwB+HRdempry4yxf58pK6o+k5nW0gLwyo7BQ85f75qhmc2VtlXtjpswEWGYPYH5wFwgXdf5UsKtL4++HFxVHKzq629ujsi/Ptyn9+7yPrma6XfStnZGi98hEWGYGcDbwDygh65L9crw5Eev1KwuCVbmZDY26brLoZSUt3YPHKGLgNdi/U5MIsIwuwGzgcXAQ22cPFIWDbt2dnVJsDKv763b0fyn7yoYcvVmin50s6RtXUmYiDDMVOBVVKPJ0nUegZxUWHthVUmwYqjxT0OsoB//1M/YfzKznybaLm1rbyz7NkScgTQDdRX7tyEn4OlBdfbK4uqK0YHQzXgBKy938y35PneoJgqijjYuvBqJcmCk22DcwPpLK4qqK8bn1d/oKJiUMH1nwfCbjV0i1zkMTJe2FZf8HSLA424SRo+mhm3TKo5MKqyt6yhIBGX7AoFDNf4+mmittK2Difh6nE8fiv0d2PWpaat/yBl49HxGenu36PjqUN/+LlG+MEy3LCpUSw7VVAt/YB8wFMiJKM/W+TJ2HMzKDV7t5n1ywI3raanhcIw4APxc2dN78lKanpHBwGzhD6QKf+BPQjXNsXzvzoZQjS38gR1ABeqougOEpRDHzmf02vZLdg7QPPaRUMjTfmaHgb0FWQ1zth4wgo5/JJNe1C5SKvyBi8IfOEGopl2AqGuAMMx0YCGqk7Zp43l9b9VvmFx14vmhtbWO6DTwqaeESs2/O7AM1YXbzCHgV1SbL++QiBYwF/gQNdrbYEJB3blNL1YtKMxu+MZTQmsM/zxgA1DkUklgF7BY2talDoloAU3gI2C4S7Ve2tb8BPwnAptQNaMjBCyXtrXZ096tPaRtWajr/ZlL1RTFPJr/j6itfS6g9yM/sEkYZn5CRBxk0jbFNrCuE/69gHxck9tBVWf2kU+AbO37TGlb1ztycobnO8ACVAZ0XACekbbVmhARYZhTgamaaIuT7ng+HqAUeB8wXOoQ6hJslLZ1CxIoVmGYWcAJVGoBzgDD480P5zG1FtUgdbQAW4EV7pUgkYxs10iEgdJYJIRhjkAtxROiqPcAi6RtVUTzjUtEGOYs4DlNtFHa1oEodjnAStQm787yb8D8joZfzKMRhvkwcIy7BXYCeEzaVqNm0xN4F3Utfa4Qp4FFwLfStmQ8EhAjI06h7dRItKD2ikZHn4ra4pfjWiOBa6jlaqu0rYT6TEwiwBzaPprLpG0dcRaoycAaYIDL5zawGVgjbas+UQIRtDsaYZgFwFGgqyMqB8aiJuo651OHBL4AlkrbOtdZAlGJCMP0ooprlCNqRA28UuCFKP77gXnSto7dK4EI3EezWCMBai7swfWmBf5C3YS4Ta0zuJMRYZgjgT+ikNNxAbVnfO5+uyaFiDDMrsBhoDCGXbuWnGxE/v0HMUjEbMnJhhCGORA4xd2NPoK4LTnZ8KIe1jqJ31E3IaH3SLIQqZFBqCb1JQm25GTjX28HzplvTGPLAAAAAElFTkSuQmCC"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <h3>20+</h3>
                <p>Active Projects</p>
              </div>
              <div class="single_achievement wow fadeInUp" data-wow-delay=".3s">
                <div class="icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAFR0lEQVRYhbWYT2xURRzHP7Pt1nZboGBN00mwVQoWKgRIAKPwVGI8QEiAgxW5cMGDEEHBWA9yQA+Ei1GCCSaEJiSAXBD/cENhDOFfUkWsCJTCgUwMpdB2S1sp2/Hwfs8+Xne3u0v7TTb75jff+f6+b97MvJmnyAClvTXAN0BVJk6BuAu866w5ljZvBjNKGk4bZzMB7gFVzhqX0ZDSXhEwSYpTgFtAr7Nmyng6UdrrASYDdUCPhJPOmhRAsdJeAtgLvAOURNqPuoNxQKB5KxR7qLR3CNhUDHwFbJCKwLHCv4uJRG/I3BTxkIoB6yW4xFlT6aypBGrzUVbaa1Taa8zTUG0o3xKJrY8xMo7a8xQMzNQAF4GLcl0IgtwqBrRK4ZUQYUD+c3lsW4Ey+W3NgR9oDoRiQe7WGHBSCmuCWmfNv4Fjpb3iTMpKezOUYvP/ZcVmpb0ZWfjFyBMJ5QjnPhkDjkihSWmvMkTqlP9nIqI7lPZ+U9pLAu3OkVhcl+xcXJfsdI4E0K60lxTOjoinQKszpFcJNEnxSMxZ0wacBhLA9lDjO/KvI6IbgflARXlJ6lFjTf/93Ws7ruxe23Glsab/fnlJ6hFQIZyNkbaB1p1QbLvkPu2saYtJMLiT7Up7DXIdDLQGHsd6/CnL/OkPui40t55dVt/Tu6y+p/dCc+vZ+dMfdAHEFH2MzGAiWu0AkivohB0AMQBnjQEOAk8BR5X2yoE2Ic4LKwr3zZii78yNydU7T9TWBXU7T9TWnbkxuTpe5AaGHW8IN4xAq01yHJWcBwNuLETeAtwA5gLHgEsSfykiirPm/LDjJ4BEPJXae0rrvae0TsRTKYChlDrurDkfbRfSuiQ55krOLQHhsZer0t4c/PFUBVwBZgNDwNPOmmSE+wcwt7wkNfTgYVEcIHR92VkzL8KfBHQB8ZD2XeBVZ81fAS/cQ0jFcvxBN1vCcWBFRDyOjAcxcBu4HRgDGoQTxgrRQrTvAMvDZkYZElOXgYXAuVA4OjgV0Cd3vA2YJb9tEutj9NYmrHEOWCi5RgmnhWxH3gO+EOP1zpqOUH0FMBRZ4FDaKwVKnDW9odjz+DNrGPgA+DrYbuQNpb1DSntOaW9/QQK+xn7RODQWd9QjS4PPgRSwQWlvQQFmFiBbC9F6MkMy6PYJt0VprywPM2VAi7TdFx3ABRkSfAx04C9sB2R8jWWmCDggbW6KxpjIyZCzpg9Yh79laAIOyuDNZKYUf+VvkjZvi8aYyDjLMiRaBXyLv/e5CjQDPwQzRnplFbALeEHMvOWs+THnHPkYkqRLgMPAcxLqBoKxMQcItjA38XvmQl76+RoSUwn8RXBnBspnwC5nTX/e2oUYElNV+ButQWAl/gmiBXgWmO2s+bsQ3VxnWToEJ4XrzpqfnTW/MPLoXi5UtCBD8uL8VIrfhaqC83qzPNaJNyR74MP4PdQJfBmqbgGuAzOB75X2qvPWz8NIKf6Ldh3+SRP8jdbvEepMRh5ZP34PbnLWdI+3oaXAr7nyI1jtrDmeCzHjmSsL9yr+wpcL3gcWkMeN52MowD/OmpZciEp7q8VQzniSaT8hyNpD8iWtAajGP/gBVCrtvZajfvA58EWlvW78L2d/OmuGM+bMYqYGOA4syjF5rrgGrHTWpP3akq2H9gCLykrcwNRy15uFlzOSA6oiOahm4a9XS9NxsvVQFzDt5Cf397w+5+G98TB0625Raf2HVR8NO2JAmbNmMMrJNqiLAGZUp/J+Y2dCXVVqsKTYDUkx7QYvWw91M7IiTwSmplu9s/XQqEPcOOIakExX8R+QYbsPSRJipwAAAABJRU5ErkJggg=="
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <h3>3+</h3>
                <p>Years Exerience</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
