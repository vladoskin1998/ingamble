
import MoreBonusesForYourChoise from './MoreBonusesForYourChoise'
import CheckMoreWhatSuitsYouBest from '../../components/categories/CheckMoreWhatSuitsYouBest'
import SubscribeForm from '../../components/subscribe/SubscribeForm'
import BottomInfo from '../../components/footer/BottomInfo'
import { useInView } from 'react-intersection-observer'

export const BlockFooter = ({ initialInView }: { initialInView :boolean}) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        initialInView,
    })

    return (
        <div ref={ref}>
            {inView && (
                <>
                    <MoreBonusesForYourChoise />
                    <CheckMoreWhatSuitsYouBest />
                    <SubscribeForm />
                    <BottomInfo />
                </>
            )}
        </div>
    )
}
