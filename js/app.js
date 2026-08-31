/**
 * MONEVO — Global State Store & Application Engine
 * Smart Money. Smarter Student Life.
 */

const MONEVO_STORAGE_KEY = 'monevo_app_state_v1';

// Default initial dummy data
const DEFAULT_INITIAL_STATE = {
  user: {
    id: 'usr_alex_01',
    name: 'Alex Rivera',
    email: 'alex.rivera@university.edu',
    avatarInitials: 'AR',
    isStudentVerified: true,
    university: 'State University',
    monthlyBudget: 800.00,
    theme: 'light' // 'light' | 'dark'
  },
  transactions: [
    {
      id: 'tx_1',
      title: 'Campus Diner',
      type: 'expense',
      category: 'Food',
      icon: '🍔',
      amount: 8.40,
      date: 'Today, 1:15 PM',
      timestamp: Date.now() - 3600000 * 2
    },
    {
      id: 'tx_2',
      title: 'Metro Monthly Pass',
      type: 'expense',
      category: 'Transport',
      icon: '🚌',
      amount: 25.00,
      date: 'Yesterday, 9:30 AM',
      timestamp: Date.now() - 86400000
    },
    {
      id: 'tx_3',
      title: 'Part-time Tutoring Job',
      type: 'income',
      category: 'Income',
      icon: '💰',
      amount: 120.00,
      date: '2 days ago',
      timestamp: Date.now() - 86400000 * 2
    },
    {
      id: 'tx_4',
      title: 'Algorithms Textbook',
      type: 'expense',
      category: 'Books',
      icon: '📚',
      amount: 45.50,
      date: '3 days ago',
      timestamp: Date.now() - 86400000 * 3
    },
    {
      id: 'tx_5',
      title: 'Campus Coffee Roasters',
      type: 'expense',
      category: 'Food',
      icon: '☕',
      amount: 4.75,
      date: '4 days ago',
      timestamp: Date.now() - 86400000 * 4
    },
    {
      id: 'tx_6',
      title: 'Gaming Subscription',
      type: 'expense',
      category: 'Fun',
      icon: '🎮',
      amount: 14.99,
      date: '5 days ago',
      timestamp: Date.now() - 86400000 * 5
    }
  ],
  budgets: {
    totalBudget: 800.00,
    categories: [
      { category: 'Food', limit: 150.00, spent: 138.00, icon: '🍔' },
      { category: 'Transport', limit: 120.00, spent: 60.00, icon: '🚌' },
      { category: 'Entertainment', limit: 100.00, spent: 40.00, icon: '🎮' },
      { category: 'Books & Supplies', limit: 80.00, spent: 45.50, icon: '📚' },
      { category: 'Rent & Utilities', limit: 350.00, spent: 350.00, icon: '🏠' }
    ]
  },
  mealPlan: {
    dailyBudget: 15.00,
    selectedDay: 'Tue',
    days: {
      'Mon': [
        { type: 'Breakfast', title: 'Oatmeal & Banana', cost: 2.00, icon: '🌅', tag: 'Budget-friendly' },
        { type: 'Lunch', title: 'Cafeteria Burrito', cost: 5.50, icon: '☀️', tag: 'Campus Meal' },
        { type: 'Dinner', title: 'Chicken Rice Bowl', cost: 5.20, icon: '🌙', tag: 'Home-cooked' }
      ],
      'Tue': [
        { type: 'Breakfast', title: 'Oatmeal & Fresh Fruit', cost: 2.20, icon: '🌅', tag: 'Quick & Healthy' },
        { type: 'Lunch', title: 'Rice & Grilled Veggies', cost: 5.30, icon: '☀️', tag: 'Campus Cafeteria' },
        { type: 'Dinner', title: 'Pasta with Garlic & Salad', cost: 5.00, icon: '🌙', tag: 'Home-cooked' }
      ],
      'Wed': [
        { type: 'Breakfast', title: 'Toast & Peanut Butter', cost: 1.80, icon: '🌅', tag: 'Quick' },
        { type: 'Lunch', title: 'Campus Deli Sandwich', cost: 6.00, icon: '☀️', tag: 'Student Discount' },
        { type: 'Dinner', title: 'Vegetable Stir-fry', cost: 4.50, icon: '🌙', tag: 'Home-cooked' }
      ],
      'Thu': [
        { type: 'Breakfast', title: 'Greek Yogurt & Honey', cost: 2.50, icon: '🌅', tag: 'Protein' },
        { type: 'Lunch', title: 'Noodle Bowl', cost: 5.00, icon: '☀️', tag: 'Affordable Eat' },
        { type: 'Dinner', title: 'Tuna Salad & Crackers', cost: 4.20, icon: '🌙', tag: 'Quick' }
      ],
      'Fri': [
        { type: 'Breakfast', title: 'Scrambled Eggs & Toast', cost: 2.10, icon: '🌅', tag: 'Budget-friendly' },
        { type: 'Lunch', title: 'Campus Pizza Slice', cost: 4.00, icon: '☀️', tag: 'Campus Cafeteria' },
        { type: 'Dinner', title: 'Roommate Taco Night', cost: 6.50, icon: '🌙', tag: 'Split with Roommates' }
      ],
      'Sat': [
        { type: 'Breakfast', title: 'Pancakes', cost: 2.40, icon: '🌅', tag: 'Weekend Brunch' },
        { type: 'Lunch', title: 'Leftover Tacos', cost: 0.00, icon: '☀️', tag: 'Zero Cost Leftover' },
        { type: 'Dinner', title: 'Green Bowl Kitchen', cost: 8.50, icon: '🌙', tag: 'Dining Out' }
      ],
      'Sun': [
        { type: 'Breakfast', title: 'Bagel & Cream Cheese', cost: 2.00, icon: '🌅', tag: 'Quick' },
        { type: 'Lunch', title: 'Meal Prep Grain Bowl', cost: 3.50, icon: '☀️', tag: 'Batch Cooked' },
        { type: 'Dinner', title: 'Tomato Basil Soup & Bread', cost: 3.80, icon: '🌙', tag: 'Budget-friendly' }
      ]
    }
  },
  restaurants: [
    {
      id: 'rest_1',
      name: 'Green Bowl Kitchen',
      price: '$',
      category: 'Bowls & Salads',
      distance: '0.4 mi',
      rating: '4.8 ★',
      discount: '🎓 10% student discount',
      address: '240 University Ave'
    },
    {
      id: 'rest_2',
      name: 'Noodle House 88',
      price: '$',
      category: 'Asian Comfort Food',
      distance: '0.6 mi',
      rating: '4.6 ★',
      discount: '🎓 Free drink with entree',
      address: '108 College Blvd'
    },
    {
      id: 'rest_3',
      name: 'Campus Deli Co.',
      price: '$$',
      category: 'Sandwiches & Subs',
      distance: '0.9 mi',
      rating: '4.5 ★',
      discount: '🎓 15% off before 2 PM',
      address: '512 Campus Way'
    },
    {
      id: 'rest_4',
      name: 'Milano Pizza Co.',
      price: '$',
      category: 'Pizza & Pasta',
      distance: '0.3 mi',
      rating: '4.7 ★',
      discount: '🎓 Buy 1 get 1 50% off',
      address: '330 Elm Street'
    }
  ],
  savingsGoals: [
    {
      id: 'goal_1',
      title: 'New Laptop',
      icon: '💻',
      currentAmount: 450.00,
      targetAmount: 900.00,
      targetMonths: 3
    },
    {
      id: 'goal_2',
      title: 'Spring Break Trip',
      icon: '✈️',
      currentAmount: 120.00,
      targetAmount: 480.00,
      targetMonths: 6
    },
    {
      id: 'goal_3',
      title: 'Emergency Fund',
      icon: '🛟',
      currentAmount: 380.00,
      targetAmount: 500.00,
      targetMonths: 1
    }
  ],
  discounts: [
    {
      id: 'disc_1',
      brand: 'SoundWave Audio',
      icon: '🎧',
      discount: '20% OFF',
      category: 'Tech',
      description: 'Noise cancelling headphones & bluetooth speakers for studying',
      code: 'STUDENT20'
    },
    {
      id: 'disc_2',
      brand: 'Milano Pizza Co.',
      icon: '🍕',
      discount: '15% OFF',
      category: 'Food',
      description: 'Dine-in and delivery discount with student email verification',
      code: 'MONEVO15'
    },
    {
      id: 'disc_3',
      brand: 'Basic Thread Co.',
      icon: '👕',
      discount: '25% OFF',
      category: 'Fashion',
      description: 'Campus essentials and seasonal collegiate apparel',
      code: 'CAMPUS25'
    },
    {
      id: 'disc_4',
      brand: 'CloudDrive Pro',
      icon: '☁️',
      discount: '50% OFF',
      category: 'Tech',
      description: '2TB Cloud Storage and automatic backup for student files',
      code: 'EDU50SAVE'
    }
  ],
  billSplitState: {
    billTotal: 50.00,
    peopleCount: 4,
    note: 'Friday Night Groceries & Pizza'
  }
};

/**
 * Central State Manager (MonevoStore)
 */
class StoreManager {
  constructor() {
    this.state = this.loadState();
    this.initTheme();
  }

  loadState() {
    try {
      const serialized = localStorage.getItem(MONEVO_STORAGE_KEY);
      if (serialized) {
        return JSON.parse(serialized);
      }
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
    }
    this.saveState(DEFAULT_INITIAL_STATE);
    return JSON.parse(JSON.stringify(DEFAULT_INITIAL_STATE));
  }

  saveState(state = this.state) {
    this.state = state;
    try {
      localStorage.setItem(MONEVO_STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Error writing to localStorage:', e);
    }
  }

  resetToDefault() {
    localStorage.removeItem(MONEVO_STORAGE_KEY);
    this.state = JSON.parse(JSON.stringify(DEFAULT_INITIAL_STATE));
    this.saveState();
    return this.state;
  }

  initTheme() {
    const savedTheme = this.state?.user?.theme || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = this.state.user.theme === 'dark' ? 'light' : 'dark';
    this.state.user.theme = current;
    this.saveState();
    document.documentElement.setAttribute('data-theme', current);
    return current;
  }

  // Transactions & Calculations
  getTotalBalance() {
    let balance = Number(this.state.user.startingBalance !== undefined ? this.state.user.startingBalance : 1248.50);
    this.state.transactions.forEach(tx => {
      if (tx.type === 'income') {
        balance += Number(tx.amount);
      } else if (tx.type === 'expense') {
        balance -= Number(tx.amount);
      }
    });
    return balance;
  }

  getMonthlySpent() {
    return this.state.budgets.categories.reduce((acc, cat) => acc + cat.spent, 0);
  }

  addTransaction(tx) {
    tx.id = 'tx_' + Date.now();
    tx.timestamp = Date.now();
    this.state.transactions.unshift(tx);

    // Update category spent if it's an expense
    if (tx.type === 'expense' && tx.category) {
      const match = this.state.budgets.categories.find(c => c.category.toLowerCase().includes(tx.category.toLowerCase()) || tx.category.toLowerCase().includes(c.category.toLowerCase()));
      if (match) {
        match.spent += Number(tx.amount);
      }
    }
    this.saveState();
  }

  deleteTransaction(id) {
    this.state.transactions = this.state.transactions.filter(t => t.id !== id);
    this.saveState();
  }

  addGoalDeposit(goalId, amount) {
    const goal = this.state.savingsGoals.find(g => g.id === goalId);
    if (goal) {
      goal.currentAmount = Math.min(goal.targetAmount, Number(goal.currentAmount) + Number(amount));
      this.saveState();
      return goal;
    }
    return null;
  }

  addSavingsGoal(newGoal) {
    newGoal.id = 'goal_' + Date.now();
    this.state.savingsGoals.push(newGoal);
    this.saveState();
  }

  addMealItem(day, meal) {
    if (!this.state.mealPlan.days[day]) {
      this.state.mealPlan.days[day] = [];
    }
    this.state.mealPlan.days[day].push(meal);
    this.saveState();
  }

  deleteMealItem(day, index) {
    if (this.state.mealPlan.days[day]) {
      this.state.mealPlan.days[day].splice(index, 1);
      this.saveState();
    }
  }

  saveBillSplit(total, people, note) {
    this.state.billSplitState = {
      billTotal: Number(total),
      peopleCount: Number(people),
      note: note || ''
    };
    this.saveState();
  }
}

// Global Singleton
const MonevoStore = new StoreManager();

/**
 * UI Utilities (Toasts, Modals, Formatters)
 */
const MonevoUI = {
  showToast(message, icon = '✓') {
    let toast = document.querySelector('.toast-container');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-container';
      const phoneScreen = document.querySelector('.screen-container') || document.body;
      phoneScreen.appendChild(toast);
    }
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  },

  formatCurrency(amount) {
    return '฿' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  setupActiveTab(tabName) {
    document.querySelectorAll('.tab-item').forEach(tab => {
      if (tab.dataset.tab === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
};

// Automatic initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  MonevoStore.initTheme();
});
