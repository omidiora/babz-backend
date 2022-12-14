export const disputeArray = {
  message: 'Successful',
  data: {
    current_page: 1,
    data: [
      {
        id: 2,
        customer_id: 3,
        merchant_id: 2,
        transaction_ref: 'TRF-8715e1466bdbb842',
        payment_id: null,
        details: 'dslfkjsd',
        to_admin: 1,
        type: 'transaction',
        status: 'escalated',
        created_at: '2020-01-16 16:04:45',
        updated_at: '2020-01-16 17:08:22',
      },
      {
        id: 1,
        customer_id: 3,
        merchant_id: 2,
        transaction_ref: 'TRF-8715e1466bdbb842',
        payment_id: null,
        details: 'dslfkjsd',
        to_admin: 1,
        type: 'transaction',
        status: 'escalated',
        created_at: '2020-01-16 16:04:45',
        updated_at: '2020-01-16 17:08:22',
      },
    ],
    first_page_url: 'http://api.odiomoney.dd/v1/disputes?page=1',
    from: 1,
    last_page: 1,
    last_page_url: 'http://api.odiomoney.dd/v1/disputes?page=1',
    next_page_url: null,
    path: 'http://api.odiomoney.dd/v1/disputes',
    per_page: 10,
    prev_page_url: null,
    to: 1,
    total: 1,
  },
};

const resolveDisputeArray = {
  message: 'Successful',
  data: {
    id: 2,
    customer_id: null,
    merchant_id: 607132,
    transaction_ref: 'TRF-8905e6b76aeec76e',
    payment_id: null,
    details: 'I am not satisfied with this payment',
    to_admin: 1,
    type: 'transaction',
    status: 'open',
    created_at: '2020-03-13 14:58:57',
    updated_at: '2020-03-13 14:58:57',
    amount_paid: 3000,
    customer: null,
    merchant: {
      id: 607132,
      first_name: 'First',
      last_name: 'Merchant',
      email: 'merchant@odiomoney.com',
      phone: null,
    },
    transaction: {
      ref: 'TRF-8905e6b76aeec76e',
      merchant_id: 607132,
      product_id: '32Hrr',
      customer_user_id: 384157,
      payment_option_id: 1,
      first_pay_at: '2020-03-31 00:00:00',
      period_date: '2020-04-10 15:22:09',
      interval_count: 3,
      interval_type: 'days',
      merchant_max_period_count: 6,
      merchant_max_period_type: 'months',
      status: 'progress',
      social_link: null,
      price: 4000,
      repayment_amount: 334,
      product_quantity: 1,
      cancellation_payback_rate: 100,
      initiate_payback_date: null,
      group_split_type: null,
      cancellation_payback_amount: null,
      cancellation_payback_deadline: null,
      reason_for_action: null,
      next_pay_date: '2020-03-31 00:00:00',
      can_extend: 1,
      created_at: '2020-03-13 13:03:58',
      updated_at: '2020-03-13 13:04:31',
    },
    payment: null,
  },
};
