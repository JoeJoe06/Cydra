import openai


openai.api_key = "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"


def chatgpt(input):
    response = openai.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user","content":input }
    ])

    return response.choices[0].message

while True: print(chatgpt(input("chatgpt: ")).content)
