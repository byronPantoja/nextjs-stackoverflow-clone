'use client'

import { formatAndDivideNumber } from '@/lib/utils'
import Image from 'next/image'

interface Props {
  type: string
  itemId: string
  userId: string
  upvotes: number
  hasupVoted: boolean
  downvotes: number
  hasdownVoted: boolean
  hasSaved: boolean
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved,
}: Props) => {
  const handleSave = async () => {}

  const handleVote = (action: string) => {}

  return (
    <div className='flex gap-5'>
      <div className='flex-center gap-2.5'>
        <div className='flex-center gap-1.5'>
          <Image
            src={
              hasupVoted
                ? '/assets/icons/upvoted.svg'
                : '/assets/icons/upvote.svg'
            }
            width={18}
            height={18}
            className='cursor-pointer'
            alt='upvotes'
            onClick={() => handleVote('upvotes')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='small-regular text-dark300_light700'>
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>
      </div>
      <div className='flex-center gap-2.5'>
        <div className='flex-center gap-1.5'>
          <Image
            src={
              hasdownVoted
                ? '/assets/icons/downvoted.svg'
                : '/assets/icons/downvote.svg'
            }
            width={18}
            height={18}
            className='cursor-pointer'
            alt='downvotes'
            onClick={() => handleVote('downvotes')}
          />

          <div className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <p className='small-regular text-dark300_light700'>
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={
          hasSaved
            ? '/assets/icons/star-filled.svg'
            : '/assets/icons/star-red.svg'
        }
        width={18}
        height={18}
        className='cursor-pointer'
        alt='upvote'
        onClick={() => handleSave()}
      />
    </div>
  )
}

export default Votes
