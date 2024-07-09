/*import React from 'react'

export default function MessagePage(){
  return (
    <div className='flex flex-col h-screen w-full flex-1'>
      <header className = "bg-gray-200 dark:bg-gray-950 border-gray-200 dark:border-gray-800 p-4 flex item-center gap-4">
        <avatar className="w-10 h-10">
        <img src="https://avatar.iran.liara.run/public/36" alt="Recipient" />
<AvatarFallback>JD</AvatarFallback>
        </avatar>
        <div className='flex-1'>
          <div className="font-medium ">john Doe</div>
          <div className='text-xs text-gray-500 dark:text-gray-400'>Online</div>

        </div>

      </header>
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        <MessagePage
                  avatarSrc="https://avatar.iran.liara.run/public/32"
                  avatarAlt="you"
                  fallbackText="yo"
                  message="Hows its going"
                  timestamp="3:30 PM"
                  sent={false}
/>
<Message
avatarSrc=" https://avatar.iran.liara.run/public/32https://avatar.iran.liara.run/public/32"
avatarAlt="you"
fallbackText="yo"
message="I' am greate, thanks for asking"
timeTamp="3:35 PM"
sent={true}

/>
<Message
          avatarSrc="https://avatar.iran.liara.run/public/32"
avatarAlt="you"
fallbackText="yo"
message="Awesome, I am glad to hear that! "
timeTamp="3:48 PM"
sent={false}
/>
<Message
          avatarSrc="https://avatar.iran.liara.run/public/32"
avatarAlt="you"
fallbackText="yo"
message="yeah, it's been a good day so far."
timeTamp="3:50 PM"
sent={true}
/>
   </div>
   <div className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2'>
    <textarea
    placeholder='Type your massage...'
    className='flex-1 resize-none border-none focus:ring-0 dark:bg-gray-900 dark:text-white'
    />
    <button  type ="button" className='rounded-full p-2 bg-transparent border-none hover:bg-gray-200 dark:hover:bg-gray-700'
    >
    <SendIcon className="w-5 h-5"/>
    <span className="sr-only ">Send</span>

   
   </button>
   
   </div>
    </div>}*/
    import React from "react";

export default function MessagePage() {
  return (
    <div className="flex flex-col h-screen w-full flex-1">
      <header className="bg-gray-200 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 flex items-center gap-4">
        <Avatar className="w-10 h-10">
          <img src="https://avatar.iran.liara.run/public/36" alt="Recipient" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium">John Doe</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Online</div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <Message
          avatarSrc="https://avatar.iran.liara.run/public/32"
          avatarAlt="You"
          fallbackText="YO"
          message="Hey there! How's it going?"
          timestamp="3:45 PM"
          sent={false}
        />
        <Message
          avatarSrc="https://avatar.iran.liara.run/public/32https://avatar.iran.liara.run/public/32"
          avatarAlt="You"
          fallbackText="YO"
          message="I'm doing great, thanks for asking!"
          timestamp="3:46 PM"
          sent={true}
        />
        <Message
          avatarSrc="https://avatar.iran.liara.run/public/32"
          avatarAlt="You"
          fallbackText="YO"
          message="Awesome, I'm glad to hear that!"
          timestamp="3:47 PM"
          sent={false}
        />
        <Message
     avatarSrc="https://avatar.iran.liara.run/public/32https://avatar.iran.liara.run/public/32"

          avatarAlt="You"
          fallbackText="YO"
          message="Yeah, it's been a good day so far."
          timestamp="3:48 PM"
          sent={true}
        />
        <Message 
                  avatarSrc="https://avatar.iran.liara.run/public/32"
avatarAlt="You"
fallbackText="yo"
message="So what are you doing"
timestamp="3:50PM"
sent={false}
/>
<Message
     avatarSrc="https://avatar.iran.liara.run/public/32https://avatar.iran.liara.run/public/32"
     avatarAlt="you"
     fallbackText="yo"
     message="Hmm reading some books which is based on inspirational things"
     timestamp="4:00 Pm"
     sent={true}
/>
<Message
   avatarSrc="https://avatar.iran.liara.run/public/32"
   avatarAlt="you"
   fallbackText="yo"
message="Waw greate i also love to read book I have so many books like inspirational, story type and spiritual also I also having plane for read book tonight ok bye see you ha  "
timestamp="4:05 PM"
sent={false}
/>
<Message
     avatarSrc="https://avatar.iran.liara.run/public/32https://avatar.iran.liara.run/public/32"
     avatarAlt="you"
     fallbackText="yo"
message="that's really greate tc bye see you "
timestamp="4:10PM"
sent={true}
/>





      </div>
      <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 p-4 flex items-center gap-2">
        <textarea
          placeholder="Type your message..."
          className="flex-1 resize-none border-none focus:ring-0 dark:bg-gray-950 dark:text-white"
        />
        <button type="button" className="rounded-full p-2 bg-transparent border-none hover:bg-gray-200 dark:hover:bg-gray-700">
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </button>
      </div>
    </div>
  );
}

function Message({ avatarSrc, avatarAlt, fallbackText, message, timestamp, sent }) {
  return (
    <div className={`flex items-start gap-3 ${sent ? 'justify-end' : ''}`}>
      {!sent && (
        <Avatar className="w-8 h-8">
          <img src={avatarSrc} alt={avatarAlt} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
      )}
      <div className={`rounded-lg p-3 max-w-[70%] ${sent ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
        <p className="text-sm">{message}</p>
        <div className={`text-xs ${sent ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'} mt-1`}>{timestamp}</div>
      </div>
      {sent && (
        <Avatar className="w-8 h-8">
          <img src={avatarSrc} alt={avatarAlt} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

function Avatar({ children, className }) {
  return <div className={`relative rounded-full overflow-hidden ${className}`}>{children}</div>;
}

function AvatarFallback({ children }) {
  return <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">{children}</div>;
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
