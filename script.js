
const destinations = {
    'paris': {
        name: 'Paris',
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Montmartre', 'Seine River walk', 'Latin Quarter', 'Champs-Élysées', 'Sacré-Cœur'],
        food: ['croissants from local bakeries', 'crepes from street vendors', 'simple bistro meals', 'fresh bread and cheese'],
        transport: 'metro day passes are your best friend',
        tips: ['Start early to beat the crowds at popular spots', 'Many museums are free on first Sundays', 'Walk along the Seine in the evening']
    },
    'tokyo': {
        name: 'Tokyo',
        attractions: ['Senso-ji Temple', 'Shibuya Crossing', 'Tsukiji Fish Market', 'Ueno Park', 'Harajuku', 'Imperial Palace Gardens', 'Akihabara', 'Meiji Shrine'],
        food: ['ramen from small shops', 'sushi from conveyor belt places', 'onigiri from convenience stores', 'street food in Harajuku'],
        transport: 'get a JR Pass if you plan to travel around',
        tips: ['Bow slightly when greeting people', 'Cash is still king in many places', 'Download Google Translate with camera feature']
    },
    'new york': {
        name: 'New York',
        attractions: ['Central Park', 'Times Square', 'Brooklyn Bridge', 'High Line', 'Statue of Liberty', '9/11 Memorial', 'Little Italy', 'Chinatown'],
        food: ['pizza slices from corner shops', 'bagels with cream cheese', 'food trucks', 'deli sandwiches'],
        transport: 'subway is fastest but walking is great too',
        tips: ['Tipping is expected at restaurants (18-20%)', 'Many museums have suggested donations', 'Avoid Times Square restaurants - they\'re overpriced']
    },
    'london': {
        name: 'London',
        attractions: ['Tower Bridge', 'British Museum', 'Hyde Park', 'Covent Garden', 'Westminster Abbey', 'Camden Market', 'Tate Modern', 'Borough Market'],
        food: ['fish and chips', 'pub meals', 'afternoon tea', 'market food'],
        transport: 'Oyster card for tubes and buses',
        tips: ['Many museums are free', 'Pubs close early on Sundays', 'Always carry an umbrella']
    },
    'rome': {
        name: 'Rome',
        attractions: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Spanish Steps', 'Pantheon', 'Roman Forum', 'Trastevere neighborhood', 'Villa Borghese'],
        food: ['gelato from local shops', 'pizza al taglio', 'pasta from family restaurants', 'espresso at standing bars'],
        transport: 'walking is best, metro for longer distances',
        tips: ['Dress modestly for churches', 'Lunch break is serious business (1-4pm)', 'Throw a coin in Trevi Fountain for good luck']
    },
    'barcelona': {
        name: 'Barcelona',
        attractions: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter', 'Barceloneta Beach', 'Casa Batlló', 'Boqueria Market', 'Montjuïc Hill'],
        food: ['tapas from local bars', 'paella (but not on Las Ramblas)', 'churros con chocolate', 'fresh seafood'],
        transport: 'metro is efficient, but walking the old town is lovely',
        tips: ['Dinner is late (9-10pm)', 'Siesta time is real (2-5pm)', 'Learn a few Spanish phrases - locals appreciate it']
    },
    'amsterdam': {
        name: 'Amsterdam',
        attractions: ['Anne Frank House', 'Van Gogh Museum', 'Jordaan neighborhood', 'Canal cruise', 'Vondelpark', 'Red Light District', 'Bloemenmarkt', 'Rijksmuseum'],
        food: ['stroopwafels from street vendors', 'Dutch cheese', 'herring (if you\'re brave)', 'brown café meals'],
        transport: 'rent a bike like a local, or use trams',
        tips: ['Book Anne Frank House way in advance', 'Watch out for bikes everywhere', 'Most people speak great English']
    },
    'berlin': {
        name: 'Berlin',
        attractions: ['Brandenburg Gate', 'East Side Gallery', 'Museum Island', 'Checkpoint Charlie', 'Tiergarten', 'Hackescher Markt', 'Kreuzberg district', 'Berlin Wall Memorial'],
        food: ['currywurst from street stands', 'döner kebab', 'pretzels', 'beer garden meals'],
        transport: 'excellent public transport system',
        tips: ['Cash is still preferred many places', 'Sunday shops are closed', 'Lots of free historical sites to explore']
    },
    'istanbul': {
        name: 'Istanbul',
        attractions: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus cruise', 'Topkapi Palace', 'Galata Tower', 'Taksim Square', 'Basilica Cistern'],
        food: ['street döner', 'Turkish breakfast', 'baklava', 'Turkish tea and coffee'],
        transport: 'ferries are scenic, metro is efficient',
        tips: ['Haggle at the Grand Bazaar', 'Remove shoes before entering mosques', 'Try a Turkish bath if you\'re feeling adventurous']
    },
    'prague': {
        name: 'Prague',
        attractions: ['Prague Castle', 'Charles Bridge', 'Old Town Square', 'Astronomical Clock', 'Jewish Quarter', 'Wenceslas Square', 'Petřín Hill', 'Lesser Town'],
        food: ['goulash', 'Czech beer (obviously)', 'trdelník pastries', 'hearty pub food'],
        transport: 'walking in old town, trams for longer trips',
        tips: ['Czech beer is cheaper than water', 'Tipping is about 10%', 'Early morning at Charles Bridge for fewer crowds']
    },
    'bangkok': {
        name: 'Bangkok',
        attractions: ['Grand Palace', 'Wat Pho Temple', 'Chatuchak Market', 'Khao San Road', 'Chao Phraya River', 'Jim Thompson House', 'Lumpini Park', 'Chinatown'],
        food: ['pad thai from street vendors', 'mango sticky rice', 'som tam salad', 'boat noodles'],
        transport: 'BTS Skytrain and boats are your friends',
        tips: ['Dress modestly for temples', 'Street food is safe and delicious', 'Bargain at markets but be respectful']
    },
    'lisbon': {
        name: 'Lisbon',
        attractions: ['Alfama district', 'Tram 28 ride', 'Belém Tower', 'Jerónimos Monastery', 'Fado houses', 'Sintra day trip', 'LX Factory', 'Miradouros viewpoints'],
        food: ['pastéis de nata', 'bifana sandwiches', 'fresh seafood', 'Portuguese wine'],
        transport: 'trams are scenic, metro is efficient',
        tips: ['Hills are steep - wear good shoes', 'Fado music in the evening is magical', 'Many places close for lunch 12-2pm']
    },
    'budapest': {
        name: 'Budapest',
        attractions: ['Parliament Building', 'Széchenyi Thermal Baths', 'Fisherman\'s Bastion', 'Danube River cruise', 'Great Market Hall', 'Ruin bars', 'Buda Castle', 'Chain Bridge'],
        food: ['goulash soup', 'lángos', 'chimney cake', 'Hungarian wine'],
        transport: 'public transport day passes are great value',
        tips: ['Thermal baths are a must-do', 'Ruin bars are unique to Budapest', 'Tipping is around 10-15%']
    }
};


const API_BASE_URL = 'http://localhost:3001/api';


function getOpenAIKey() {
    const keyInput = document.getElementById('openaiKey');
    if (keyInput && keyInput.value) {
        localStorage.setItem('openai_api_key', keyInput.value);
        return keyInput.value;
    }
    return localStorage.getItem('openai_api_key') || null;
}


let backendAvailable = false;


let currentUser = null;
let authToken = localStorage.getItem('travel_buddy_token');


async function checkBackendAvailability() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        backendAvailable = response.ok;
        console.log('Backend available:', backendAvailable);
    } catch (error) {
        backendAvailable = false;
        console.log('Backend not available, running in demo mode');
        showDemoModeNotice();
    }
}

function showDemoModeNotice() {
    const notice = document.createElement('div');
    notice.className = 'demo-notice';
    notice.innerHTML = `
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 12px; border-radius: 8px; margin: 10px 0; text-align: center;">
            <strong>Demo Mode:</strong> Running without backend - trips won't be saved, but you can still plan itineraries!
        </div>
    `;
    document.querySelector('.container').insertBefore(notice, document.querySelector('.planner-form'));
}


document.addEventListener('DOMContentLoaded', function() {
    checkBackendAvailability();
    
    if (authToken && backendAvailable) {
        fetchCurrentUser();
    }
    
    setupAuthUI();
    setupPlanAnotherTrip();
    setupKeyboardShortcuts();
    setupFormPersistence();
});


async function apiCall(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

async function login(email, password) {
    try {
        const data = await apiCall('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        authToken = data.token;
        currentUser = data.user;
        localStorage.setItem('travel_buddy_token', authToken);
        
        updateAuthUI();
        return data;
    } catch (error) {
        throw error;
    }
}

async function register(name, email, password) {
    try {
        const data = await apiCall('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });

        authToken = data.token;
        currentUser = data.user;
        localStorage.setItem('travel_buddy_token', authToken);
        
        updateAuthUI();
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchCurrentUser() {
    try {
        const data = await apiCall('/auth/me');
        currentUser = data.user;
        updateAuthUI();
    } catch (error) {
        
        logout();
    }
}

function logout() {
    authToken = null;
    currentUser = null;
    localStorage.removeItem('travel_buddy_token');
    updateAuthUI();
}


document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
  
    clearErrorStates();
    
    
    const destination = document.getElementById('destination').value.trim();
    const budget = document.getElementById('budget').value;
    const days = parseInt(document.getElementById('days').value);
    
    if (!destination) {
        showFieldError('destination', 'Please tell me where you want to go!');
        return;
    }
    
    if (!budget) {
        showFieldError('budget', 'I need to know your budget level to plan properly!');
        return;
    }
    
    if (days < 1 || days > 14) {
        showFieldError('days', 'Let\'s keep it between 1-14 days for the best planning!');
        return;
    }
    
    generateItinerary();
});

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = '#f56565';
    field.focus();
    
    
    let errorDiv = document.getElementById(fieldId + '-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = fieldId + '-error';
        errorDiv.style.color = '#f56565';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '5px';
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearErrorStates() {
    const fields = ['destination', 'budget', 'days'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.style.borderColor = '#e2e8f0';
        
        const errorDiv = document.getElementById(fieldId + '-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    });
}

async function generateItinerary() {
    const destination = document.getElementById('destination').value.trim();
    const days = parseInt(document.getElementById('days').value);
    const budget = document.getElementById('budget').value;
    const interests = document.getElementById('interests').value;
    const travelStyle = document.getElementById('travelStyle').value;

    
    const itineraryDiv = document.getElementById('itinerary');
    const contentDiv = document.getElementById('itineraryContent');
    
    contentDiv.innerHTML = '<div class="loading">Researching the best spots in ' + destination + '</div>';
    itineraryDiv.classList.remove('hidden');
    itineraryDiv.scrollIntoView({ behavior: 'smooth' });

    try {
        let itinerary;
        
        if (currentUser && backendAvailable) {
            
            const tripData = await apiCall('/trips', {
                method: 'POST',
                body: JSON.stringify({
                    destination,
                    duration: days,
                    budget,
                    travelStyle,
                    interests: interests ? interests.split(',').map(i => i.trim()) : []
                })
            });
            
            itinerary = tripData.trip.itinerary;
            showSaveMessage('Trip saved to your account!');
        } else {
           
            contentDiv.innerHTML = '<div class="loading">Getting local insights for ' + destination + '</div>';
            
            
            const destData = await generateDestinationData(destination, interests, budget, travelStyle);
            
            contentDiv.innerHTML = '<div class="loading">Creating your personalized itinerary</div>';
            
            setTimeout(() => {
                itinerary = createItinerary(destData, days, budget, interests, travelStyle);
                displayItinerary(itinerary);
                
                if (backendAvailable && !currentUser) {
                    showLoginPrompt();
                }
            }, 1000);
            return;
        }
        
        displayItinerary(itinerary);
    } catch (error) {
        console.error('Generate itinerary error:', error);
        
        contentDiv.innerHTML = '<div class="loading">Creating your itinerary with local knowledge</div>';
        
        setTimeout(async () => {
            const destData = getFallbackDestinationData(destination, interests, budget);
            const localItinerary = createItinerary(destData, days, budget, interests, travelStyle);
            displayItinerary(localItinerary);
            
            
            const notice = document.createElement('div');
            notice.className = 'llm-notice';
            notice.innerHTML = `
                <div style="background: #e6f3ff; border: 1px solid #4299e1; color: #2b6cb0; padding: 12px; border-radius: 8px; margin: 10px 0; text-align: center;">
                    <strong>Note:</strong> Using local knowledge for ${destination}. For more specific recommendations, add your OpenAI API key.
                </div>
            `;
            itineraryDiv.insertBefore(notice, contentDiv);
        }, 1500);
    }
}

function createItinerary(destData, days, budget, interests, travelStyle) {
    const budgetLevel = {
        'tight': 'budget-friendly',
        'moderate': 'reasonably priced',
        'comfortable': 'nice'
    };

    const styleDescriptions = {
        'relaxed': 'I\'ve kept things pretty chill so you can really soak in the atmosphere',
        'active': 'I\'ve packed in some great spots while still keeping it manageable',
        'spontaneous': 'I\'ve given you a loose framework - feel free to wander off and explore'
    };

    let itinerary = {
        overview: `Here's a ${days}-day plan for ${destData.name} that should work well for your ${budgetLevel[budget] || 'flexible'} budget. ${styleDescriptions[travelStyle] || 'I\'ve tried to balance must-see spots with local favorites'}, and you won't feel rushed.`,
        days: [],
        tips: [
            `Getting around: ${destData.transport}`,
            `Food tip: Try ${destData.food[0]} and ${destData.food[1]} - they're usually affordable and delicious`,
            ...destData.tips
        ]
    };

    
    for (let day = 1; day <= days; day++) {
        const dayPlan = createDayPlan(destData, day, days, budget, interests, travelStyle);
        itinerary.days.push(dayPlan);
    }

    return itinerary;
}

function createDayPlan(destData, dayNum, totalDays, budget, interests, travelStyle) {
    let attractions = [...destData.attractions];
    
 
    if (interests) {
        attractions = getInterestBasedSuggestions(interests, attractions);
    }
    
    const food = [...destData.food];
    
    
    let maxActivities = 2;
    if (travelStyle === 'active') maxActivities = 3;
    if (travelStyle === 'relaxed') maxActivities = 2;
    if (travelStyle === 'spontaneous') maxActivities = 1;
    
    const dayAttractions = attractions.slice(0, maxActivities + Math.floor(Math.random() * 2));
    const dayFood = food[Math.floor(Math.random() * food.length)];

    let morning, afternoon, evening;

    if (dayNum === 1) {
        morning = `Start your first day easy - grab some ${dayFood} for breakfast and head to ${dayAttractions[0]}. It's usually less crowded in the morning, and you'll have more energy to explore.`;
        afternoon = `After lunch, check out ${dayAttractions[1] || dayAttractions[0]}. Take your time here, maybe sit down for a bit if you're feeling tired from the travel.`;
        evening = getFirstDayEvening(travelStyle);
    } else if (dayNum === totalDays) {
        morning = `On your last day, visit ${dayAttractions[0]} if you haven't been there yet, or revisit your favorite spot from earlier in the trip.`;
        afternoon = `Spend the afternoon doing some last-minute shopping or just wandering around. Maybe grab some souvenirs or try that restaurant you've been curious about.`;
        evening = `Keep your last evening flexible depending on your departure time. If you're leaving early tomorrow, pack tonight and get some rest.`;
    } else {
        const morningSpot = dayAttractions[0];
        const afternoonSpot = dayAttractions[1] || 'a nearby neighborhood';
        const eveningActivity = dayAttractions[2] || 'exploring the local area';
        
        morning = `Start day ${dayNum} with ${morningSpot}. ${getTimeAdvice(morningSpot)}`;
        afternoon = `Head over to ${afternoonSpot} for the afternoon. Grab lunch somewhere local - ${dayFood} is always a good choice.`;
        evening = getEveningPlan(eveningActivity, travelStyle);
    }

    return {
        day: dayNum,
        morning: morning,
        afternoon: afternoon,
        evening: evening
    };
}

function getFirstDayEvening(travelStyle) {
    const eveningOptions = {
        'relaxed': 'For your first evening, keep it simple. Find a local spot for dinner and maybe take a walk around the area where you\'re staying. No need to pack too much into day one.',
        'active': 'For your first evening, you could explore the area around your accommodation or find a nice local restaurant. Save the big adventures for when you\'re more settled in.',
        'spontaneous': 'For your first evening, just see how you feel. Maybe wander around and see what catches your eye, or ask your accommodation for a good local dinner spot.'
    };
    return eveningOptions[travelStyle] || eveningOptions['relaxed'];
}

function getEveningPlan(activity, travelStyle) {
    if (travelStyle === 'active') {
        return `Evening is perfect for ${activity}. You seem like someone who likes to make the most of their time, so don't feel bad about staying out a bit later.`;
    } else if (travelStyle === 'spontaneous') {
        return `Evening could be ${activity}, or whatever feels right in the moment. Trust your instincts and go with the flow.`;
    } else {
        return `Evening is perfect for ${activity} or just finding a cozy place for dinner. Don't feel like you have to stay out late if you're tired.`;
    }
}

function getTimeAdvice(attraction) {
    const crowdedSpots = ['tower', 'museum', 'palace', 'castle', 'bridge'];
    const isCrowded = crowdedSpots.some(spot => attraction.toLowerCase().includes(spot));
    
    if (isCrowded) {
        return 'Getting there early will save you from crowds and long lines.';
    }
    return 'Take your time and enjoy the atmosphere.';
}

function displayItinerary(itinerary) {
    const itineraryDiv = document.getElementById('itinerary');
    const contentDiv = document.getElementById('itineraryContent');

    let html = `
        <div class="trip-overview">
            <p>${itinerary.overview}</p>
        </div>
    `;

    itinerary.days.forEach(day => {
        html += `
            <div class="day-plan">
                <h3>Day ${day.day}</h3>
                <p><strong>Morning:</strong> ${day.morning}</p>
                <p><strong>Afternoon:</strong> ${day.afternoon}</p>
                <p><strong>Evening:</strong> ${day.evening}</p>
            </div>
        `;
    });

    html += `
        <div class="travel-tips">
            <h3>A few practical tips</h3>
            <ul>
                ${itinerary.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
        <div class="weather-note">
            Remember, this is just a rough plan! Feel free to change things up based on the weather, how you're feeling, or if you discover something cool along the way.
        </div>
    `;

    contentDiv.innerHTML = html;
    itineraryDiv.classList.remove('hidden');
    
    // Scroll to itinerary
    itineraryDiv.scrollIntoView({ behavior: 'smooth' });
}

// Add some common destination suggestions
const destinationInput = document.getElementById('destination');
const commonDestinations = ['Paris', 'Tokyo', 'New York', 'London', 'Rome', 'Barcelona', 'Amsterdam', 'Berlin', 'Istanbul', 'Prague'];

// Add autocomplete functionality
destinationInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    if (value.length > 1) {
        const matches = commonDestinations.filter(dest => 
            dest.toLowerCase().includes(value)
        );
        // Simple visual feedback could be added here
    }
});

// Add keyboard navigation and analytics tracking
document.addEventListener('DOMContentLoaded', function() {
    // Plan Another Trip functionality
    document.getElementById('planAnother').addEventListener('click', function() {
        document.getElementById('itinerary').classList.add('hidden');
        document.getElementById('tripForm').scrollIntoView({ behavior: 'smooth' });
        clearErrorStates();
        // Focus on destination field for better UX
        document.getElementById('destination').focus();
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const form = document.getElementById('tripForm');
            if (!document.getElementById('itinerary').classList.contains('hidden')) return;
            form.dispatchEvent(new Event('submit'));
        }
    });
    
    // Auto-save form data to localStorage
    const formFields = ['destination', 'days', 'budget', 'interests', 'travelStyle'];
    
    // Load saved data
    formFields.forEach(fieldId => {
        const savedValue = localStorage.getItem('travelBuddy_' + fieldId);
        if (savedValue) {
            document.getElementById(fieldId).value = savedValue;
        }
    });
    
    // Save data on change
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('change', function() {
            localStorage.setItem('travelBuddy_' + fieldId, this.value);
        });
    });
});

// Add interest-based suggestions
function getInterestBasedSuggestions(interests, attractions) {
    const interestKeywords = {
        'museum': ['museum', 'gallery', 'art'],
        'food': ['market', 'restaurant', 'food', 'cafe'],
        'history': ['castle', 'palace', 'memorial', 'historic'],
        'nature': ['park', 'garden', 'hill', 'beach'],
        'nightlife': ['district', 'quarter', 'square'],
        'shopping': ['market', 'bazaar', 'street']
    };
    
    const userInterests = interests.toLowerCase();
    let prioritizedAttractions = [...attractions];
    
    // Boost attractions that match user interests
    for (let interest in interestKeywords) {
        if (userInterests.includes(interest)) {
            const keywords = interestKeywords[interest];
            prioritizedAttractions = prioritizedAttractions.sort((a, b) => {
                const aMatches = keywords.some(keyword => a.toLowerCase().includes(keyword));
                const bMatches = keywords.some(keyword => b.toLowerCase().includes(keyword));
                if (aMatches && !bMatches) return -1;
                if (!aMatches && bMatches) return 1;
                return 0;
            });
        }
    }
    
    return prioritizedAttractions;
}

// LLM-powered destination data generation
async function generateDestinationData(destination, interests, budget, travelStyle) {
    const OPENAI_API_KEY = getOpenAIKey();
    
    if (!OPENAI_API_KEY) {
        console.log('No OpenAI API key provided, using enhanced fallback');
        return getFallbackDestinationData(destination, interests, budget);
    }

    const prompt = `You are a friendly, knowledgeable local travel buddy helping someone plan a trip to ${destination}. 
    
    Generate specific, real tourist attractions, local food recommendations, and practical tips for ${destination}. 
    
    Consider these preferences:
    - Interests: ${interests || 'general sightseeing'}
    - Budget: ${budget} (tight=budget-friendly, moderate=mid-range, comfortable=can spend more)
    - Travel style: ${travelStyle} (relaxed=fewer activities, active=more packed, spontaneous=flexible)
    
    Respond with this exact JSON structure (no additional text):
    {
        "name": "${destination}",
        "attractions": [
            "specific real attraction 1 with exact name",
            "specific real attraction 2 with exact name", 
            "specific real attraction 3 with exact name",
            "specific real attraction 4 with exact name",
            "specific real attraction 5 with exact name",
            "specific real attraction 6 with exact name"
        ],
        "food": [
            "specific local food/restaurant recommendation 1",
            "specific local food/restaurant recommendation 2",
            "specific local food/restaurant recommendation 3"
        ],
        "transport": "practical transport advice for getting around ${destination}",
        "tips": [
            "practical local tip 1 specific to ${destination}",
            "practical local tip 2 specific to ${destination}", 
            "practical local tip 3 specific to ${destination}"
        ]
    }
    
    Make sure all attractions are REAL, SPECIFIC places in ${destination} with exact names (temples, museums, markets, parks, etc.). Include practical, budget-conscious advice like a local friend would give. For Indian cities, include temples, local markets, and regional specialties.`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful local travel assistant that provides specific, accurate information about tourist destinations. Always respond with valid JSON only, no additional text.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (response.ok) {
            const data = await response.json();
            let content = data.choices[0].message.content.trim();
            
            // Clean up the response to ensure it's valid JSON
            if (content.startsWith('```json')) {
                content = content.replace(/```json\n?/, '').replace(/\n?```$/, '');
            }
            
            try {
                const destinationData = JSON.parse(content);
                console.log('LLM generated data for', destination, destinationData);
                return destinationData;
            } catch (parseError) {
                console.error('Failed to parse LLM response:', parseError, 'Content:', content);
                return getFallbackDestinationData(destination, interests, budget);
            }
        } else {
            const errorData = await response.json();
            console.error('OpenAI API error:', response.status, errorData);
            
            if (response.status === 401) {
                showAPIKeyError('Invalid OpenAI API key. Please check your key and try again.');
            }
            
            return getFallbackDestinationData(destination, interests, budget);
        }
    } catch (error) {
        console.error('LLM API error:', error);
        return getFallbackDestinationData(destination, interests, budget);
    }
}

function showAPIKeyError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'api-error';
    errorDiv.innerHTML = `
        <div style="background: #fed7d7; border: 1px solid #fc8181; color: #c53030; padding: 12px; border-radius: 8px; margin: 10px 0;">
            <strong>API Error:</strong> ${message}
        </div>
    `;
    
    const apiConfig = document.getElementById('apiConfig');
    apiConfig.appendChild(errorDiv);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Enhanced fallback with more intelligent destination data
function getFallbackDestinationData(destination, interests, budget) {
    const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1);
    
    // Enhanced fallback data for Indian cities and popular destinations
    const commonAttractions = {
        'coimbatore': [
            'Marudamalai Temple',
            'Perur Pateeswarar Temple', 
            'Dhyanalinga Temple (Isha Yoga Center)',
            'VOC Park and Zoo',
            'Siruvani Waterfalls',
            'Monkey Falls (Aliyar)'
        ],
        'madurai': [
            'Meenakshi Amman Temple',
            'Thirumalai Nayakkar Palace',
            'Gandhi Memorial Museum',
            'Alagar Kovil',
            'Vandiyur Mariamman Teppakulam',
            'Koodal Azhagar Temple'
        ],
        'chennai': [
            'Marina Beach',
            'Kapaleeshwarar Temple',
            'Fort St. George',
            'Government Museum',
            'Santhome Cathedral',
            'Elliot\'s Beach (Besant Nagar)'
        ],
        'bangalore': [
            'Lalbagh Botanical Garden',
            'Bangalore Palace',
            'Cubbon Park',
            'ISKCON Temple',
            'Tipu Sultan\'s Summer Palace',
            'Commercial Street'
        ],
        'mumbai': [
            'Gateway of India',
            'Marine Drive',
            'Elephanta Caves',
            'Chhatrapati Shivaji Terminus',
            'Juhu Beach',
            'Crawford Market'
        ],
        'delhi': [
            'Red Fort',
            'India Gate',
            'Qutub Minar',
            'Lotus Temple',
            'Humayun\'s Tomb',
            'Chandni Chowk'
        ],
        'jaipur': [
            'Hawa Mahal',
            'City Palace',
            'Amber Fort',
            'Jantar Mantar',
            'Nahargarh Fort',
            'Johari Bazaar'
        ],
        'kochi': [
            'Chinese Fishing Nets',
            'Mattancherry Palace',
            'Jewish Synagogue',
            'Fort Kochi Beach',
            'St. Francis Church',
            'Spice Markets'
        ],
        'mysore': [
            'Mysore Palace',
            'Chamundi Hills',
            'St. Philomena\'s Church',
            'Mysore Zoo',
            'Devaraja Market',
            'Brindavan Gardens'
        ],
        'pondicherry': [
            'French Quarter',
            'Aurobindo Ashram',
            'Promenade Beach',
            'Paradise Beach',
            'Auroville',
            'Bharathi Park'
        ]
    };

    const commonFood = {
        'coimbatore': [
            'Kongunadu cuisine at Annapoorna Restaurant',
            'filter coffee from local Udupi restaurants',
            'street food and snacks at RS Puram'
        ],
        'madurai': [
            'Madurai famous jigarthanda',
            'South Indian meals at Murugan Idli Shop',
            'street food at Meenakshi Temple area'
        ],
        'chennai': [
            'South Indian breakfast at Saravana Bhavan',
            'filter coffee and tiffin at local Udupi hotels',
            'street food at Marina Beach and T. Nagar'
        ],
        'bangalore': [
            'South Indian breakfast at MTR (Mavalli Tiffin Room)',
            'filter coffee at Indian Coffee House',
            'street food at VV Puram Food Street'
        ],
        'mumbai': [
            'vada pav from street vendors',
            'pav bhaji at Juhu Beach',
            'street food at Mohammed Ali Road'
        ],
        'delhi': [
            'paranthas at Paranthe Wali Gali',
            'chaat at Chandni Chowk',
            'kebabs at Karim\'s restaurant'
        ],
        'jaipur': [
            'dal baati churma at local restaurants',
            'lassi at Lassiwala',
            'street food at Johari Bazaar'
        ],
        'kochi': [
            'Kerala fish curry and appam',
            'seafood at Fort Kochi restaurants',
            'spices and tea from local markets'
        ]
    };

    const transportAdvice = {
        'coimbatore': 'Local buses, auto-rickshaws, and app-based cabs. TNSTC buses connect to nearby attractions.',
        'madurai': 'City buses, auto-rickshaws, and cycle-rickshaws. Temple area is walkable.',
        'chennai': 'Chennai Metro, local buses, auto-rickshaws, and app-based cabs work well.',
        'bangalore': 'Namma Metro, local buses (BMTC), auto-rickshaws, and app-based cabs.',
        'mumbai': 'Local trains are fastest, buses, taxis, and auto-rickshaws available.',
        'delhi': 'Delhi Metro is excellent, buses, auto-rickshaws, and app-based cabs.',
        'jaipur': 'Local buses, auto-rickshaws, cycle-rickshaws, and app-based cabs.',
        'kochi': 'Local buses, auto-rickshaws, ferries for backwater areas.'
    };

    const key = destination.toLowerCase();
    
    return {
        name: destinationName,
        attractions: commonAttractions[key] || [
            `${destinationName} city center and main market`,
            `Local temples and religious sites in ${destinationName}`,
            `${destinationName} museum or cultural center`,
            `Parks and gardens in ${destinationName}`,
            `Historic monuments in ${destinationName}`,
            `Local shopping areas and markets`
        ],
        food: commonFood[key] || [
            `local specialties and regional cuisine of ${destinationName}`,
            `street food from local vendors and markets`,
            `traditional restaurants and local eateries`
        ],
        transport: transportAdvice[key] || `Local buses, auto-rickshaws, and walking are common in ${destinationName}. App-based cabs are usually available.`,
        tips: [
            `Research local customs and traditions in ${destinationName}`,
            'Keep some cash handy as many local places don\'t accept cards',
            'Ask locals for the best hidden gems and food recommendations',
            'Respect local dress codes, especially at religious sites',
            'Try to learn a few words in the local language - people appreciate it'
        ]
    };
}

// UI Helper functions
function setupAuthUI() {
    // Add login/register modal to the page
    const authModal = document.createElement('div');
    authModal.id = 'authModal';
    authModal.className = 'auth-modal hidden';
    authModal.innerHTML = `
        <div class="auth-modal-content">
            <span class="auth-close">&times;</span>
            <div id="authTabs">
                <button class="auth-tab active" data-tab="login">Login</button>
                <button class="auth-tab" data-tab="register">Sign Up</button>
            </div>
            
            <div id="loginForm" class="auth-form">
                <h3>Welcome back!</h3>
                <form id="loginFormElement">
                    <input type="email" id="loginEmail" placeholder="Email" required>
                    <input type="password" id="loginPassword" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
            </div>
            
            <div id="registerForm" class="auth-form hidden">
                <h3>Join Travel Buddy</h3>
                <form id="registerFormElement">
                    <input type="text" id="registerName" placeholder="Your name" required>
                    <input type="email" id="registerEmail" placeholder="Email" required>
                    <input type="password" id="registerPassword" placeholder="Password (min 6 characters)" required>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(authModal);

    // Add auth button to header
    const header = document.querySelector('header');
    const authButton = document.createElement('div');
    authButton.id = 'authButton';
    authButton.className = 'auth-button';
    header.appendChild(authButton);

    // Setup event listeners
    setupAuthEventListeners();
    updateAuthUI();
}

function setupAuthEventListeners() {
    // Modal controls
    document.getElementById('authModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });

    document.querySelector('.auth-close').addEventListener('click', function() {
        document.getElementById('authModal').classList.add('hidden');
    });

    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchAuthTab(tabName);
        });
    });

    // Form submissions
    document.getElementById('loginFormElement').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        try {
            await login(email, password);
            document.getElementById('authModal').classList.add('hidden');
            showSaveMessage('Welcome back! Your trips will now be saved.');
        } catch (error) {
            alert(error.message);
        }
    });

    document.getElementById('registerFormElement').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        try {
            await register(name, email, password);
            document.getElementById('authModal').classList.add('hidden');
            showSaveMessage('Welcome to Travel Buddy! Your trips will be saved automatically.');
        } catch (error) {
            alert(error.message);
        }
    });
}

function switchAuthTab(tabName) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById(`${tabName}Form`).classList.remove('hidden');
}

function updateAuthUI() {
    const authButton = document.getElementById('authButton');
    
    if (currentUser) {
        authButton.innerHTML = `
            <span>Hi, ${currentUser.name}!</span>
            <button onclick="logout()" class="logout-btn">Logout</button>
        `;
    } else {
        authButton.innerHTML = `
            <button onclick="showAuthModal()" class="login-btn">Login / Sign Up</button>
        `;
    }
}

function showAuthModal() {
    document.getElementById('authModal').classList.remove('hidden');
}

function showSaveMessage(message) {
    const saveMessage = document.createElement('div');
    saveMessage.className = 'save-message';
    saveMessage.textContent = message;
    document.body.appendChild(saveMessage);
    
    setTimeout(() => {
        saveMessage.remove();
    }, 3000);
}

function showLoginPrompt() {
    const loginPrompt = document.createElement('div');
    loginPrompt.className = 'login-prompt';
    loginPrompt.innerHTML = `
        <p>💡 Want to save your trips and access them later?</p>
        <button onclick="showAuthModal()" class="prompt-login-btn">Create Free Account</button>
    `;
    
    const itineraryDiv = document.getElementById('itinerary');
    itineraryDiv.appendChild(loginPrompt);
}

// Setup other UI functions
function setupPlanAnotherTrip() {
    document.getElementById('planAnother').addEventListener('click', function() {
        document.getElementById('itinerary').classList.add('hidden');
        document.getElementById('tripForm').scrollIntoView({ behavior: 'smooth' });
        clearErrorStates();
        document.getElementById('destination').focus();
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const form = document.getElementById('tripForm');
            if (!document.getElementById('itinerary').classList.contains('hidden')) return;
            form.dispatchEvent(new Event('submit'));
        }
    });
}

function setupFormPersistence() {
    const formFields = ['destination', 'days', 'budget', 'interests', 'travelStyle'];
    
    // Load saved data
    formFields.forEach(fieldId => {
        const savedValue = localStorage.getItem('travelBuddy_' + fieldId);
        if (savedValue) {
            document.getElementById(fieldId).value = savedValue;
        }
    });
    
    // Load saved OpenAI key
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
        const keyInput = document.getElementById('openaiKey');
        if (keyInput) {
            keyInput.value = savedKey;
        }
    }
    
    // Save data on change
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('change', function() {
            localStorage.setItem('travelBuddy_' + fieldId, this.value);
        });
    });
    
    // Save OpenAI key on change
    const keyInput = document.getElementById('openaiKey');
    if (keyInput) {
        keyInput.addEventListener('change', function() {
            if (this.value) {
                localStorage.setItem('openai_api_key', this.value);
            }
        });
    }
}
// Homepage specific functions
function scrollToPlanner() {
    document.getElementById('planner').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function quickPlan(destination) {
    // Fill the form with the selected destination
    document.getElementById('destination').value = destination;
    
    // Set some smart defaults based on destination
    const defaults = {
        'Coimbatore': { days: 3, budget: 'moderate', interests: 'temples, nature, local food' },
        'Chennai': { days: 4, budget: 'moderate', interests: 'beaches, temples, culture' },
        'Bangalore': { days: 3, budget: 'moderate', interests: 'gardens, food, shopping' },
        'Madurai': { days: 2, budget: 'tight', interests: 'temples, history, local food' }
    };
    
    if (defaults[destination]) {
        const config = defaults[destination];
        document.getElementById('days').value = config.days;
        document.getElementById('budget').value = config.budget;
        document.getElementById('interests').value = config.interests;
    }
    
    // Scroll to planner
    scrollToPlanner();
    
    // Focus on the destination field
    setTimeout(() => {
        document.getElementById('destination').focus();
    }, 500);
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Enhanced form interaction
document.addEventListener('DOMContentLoaded', function() {
    // Add floating label effect
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentNode.classList.add('focused');
        }
    });
});

// Add some interactive animations
function addInteractiveAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .destination-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveAnimations);

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('.nav-logo').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        this.style.animation = 'spin 1s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
            clickCount = 0;
        }, 1000);
    }
});

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .nav-links.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-top: 1px solid var(--border-color);
    }
    
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);